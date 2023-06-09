import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TelemetryService} from '../../services/telemetry.service';
import {AuthService} from '../../services/auth.service';
import {SettingsService} from '../../services/settings.service';
import {ChatService} from '../../services/chat.service';
import axios from 'axios';
import {params} from '../../../environments/params';
import {authCodeFlowConfig} from '../../../environments/authflow';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {
  private user;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly settingsService: SettingsService,
    private readonly router: Router,
    private readonly chatService: ChatService,
    private readonly telemetryService: TelemetryService
  ) {
  }

  async ngOnInit(): Promise<void> {
    const nonce = sessionStorage.getItem('nonce');

    this.activatedRoute.queryParams.subscribe(async (parameters) => {
      if (parameters.state === nonce) {
        const userinfo = await this.getUserInfo(parameters.access_token);
        this.user = {
          given_name: userinfo.name,
          family_name: userinfo.family_name,
          email: userinfo.email,
          sub: userinfo.sub,
          state: userinfo.state,
        };
        try {
          await this.loginAuthentificated(this.user.email, this.user.given_name, this.user.family_name, this.user.sub);
        } catch (error) {
          this.router.navigateByUrl('/start');
        }
      } else {
        this.router.navigateByUrl('/start');
      }
    });
  }

  private readonly getUserInfo = async (access_token: string) => {
    return axios
      .get(authCodeFlowConfig.userinfoEndpoint + access_token)
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  private async loginAuthentificated(email: string, firstname: string, lastname: string, idDGASI: string) {
    try {
      await this.authService.login(email, params.defaultPassword, false);
      await this.telemetryService.logUser(idDGASI);
      const roomId = this.chatService.createRoomId();
      localStorage.setItem('isLogged', 'true');
      this.settingsService.user.next({
        ...this.settingsService.user.value,
        role: this.authService.getRole(email),
        firstname,
        lastname,
        email,
        idDGASI,
        agency: '',
        connectionTime: Date.now(),
        roomId,
        isMultiDevices: false,
      });
      localStorage.setItem('user', JSON.stringify(this.settingsService.user.value));
      this.router.navigateByUrl('choice');
    } catch (error) {
    }
  }
}
