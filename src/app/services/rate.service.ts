import axios from 'axios';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Rate } from '../models/rate';
import { environment } from '../../environments/environment';
import { ErrorService } from './error.service';
import { ERROR_TECH_EXPORT_STATS } from '../models/error/errorTechnical';
import { JwtGwSingleton } from '../models/token/JwtGwSingleton';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private rate: Rate;
  private db: string = 'rates';

  constructor(private afs: AngularFirestore, private errorService: ErrorService, private authService: AuthService) {
  }

  public rateConversation(rate: Rate): void {
    this.rate = rate;
  }

  public saveRate(): Promise<void> {
    return this.afs.collection(this.db).doc<Rate>(this.afs.createId()).set(this.rate);
  }

  public async getRates(isNotLogged: boolean) {
    if (isNotLogged) {
      const user = JSON.parse(localStorage.getItem('user'));
      await this.authService.login(environment.peama.login, environment.peama.password, user.email);
    }
    const gwToken = JwtGwSingleton.getInstance().getToken().token;
    const url = `${environment.gcp.gateWayUrl}/reporting`;
    const data = {
      query: `
            query rates {
              rates{
                day
                hour
                language
                facilityGrade
                efficientGrade
                offerLinked
                comment
                conversationDuration
                typeEntretien
                nbMessagesAdvisor
                nbMessagesGuest
                user
                agency
                typeSTT
              }
            }`
    };
    return axios({
      method: 'POST',
      headers: { Authorization: `Bearer ${gwToken}` },
      data,
      url
    })
      .then((response) => {
        const dataRates = response.data.data.rates;
        const rates = [];
        dataRates.forEach((element) => {
          rates.push({
            Date: element.day,
            Heure: element.hour,
            Langage: element.language,
            conversationDuration: element.conversationDuration,
            'Qualité des traductions': element.facilityGrade,
            'Note de l\'outil': element.efficientGrade,
            'Problème technique': element.offerLinked,
            'Commentaire libre': element.comment,
            'Type entretien': element.typeEntretien,
            'Nombre message conseiller': element.nbMessagesAdvisor,
            'Nombre message DE': element.nbMessagesGuest,
            'identifiant utilisateur': element.user,
            'Identifiant agence': element.agency,
            'type STT': element.typeSTT
          });
        });
        return rates;
      })
      .catch((error) => {
        this.errorService.save(ERROR_TECH_EXPORT_STATS);
        throw new Error(error);
      });
  }

  public getRateByHistoricId(id: string): Observable<Rate[]> {
    return this.afs
      .collection<Rate>(this.db, (rf) => rf.where('historyId', '==', id))
      .valueChanges();
  }

}
