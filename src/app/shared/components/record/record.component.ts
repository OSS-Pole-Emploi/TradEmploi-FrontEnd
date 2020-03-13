import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { VOCABULARY_V2 } from 'src/app/data/vocabulary';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  @Input() duration: number;
  @Input() user: 'advisor' | 'guest';

  @Output() send: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() exit: EventEmitter<string> = new EventEmitter<string>();

  public text: string = '';
  public width: number = 0;
  public seconds: number = 0;
  public isPaused: boolean = false;
  // public recorder: any;
  public intervalId: any;

  constructor(private settingsService: SettingsService, private audioRecordingService: AudioRecordingService) {}

  ngOnInit(): void {
    this.start();
  }

  start = async (): Promise<void> => {
    this.putTitle();
    this.record();
    this.recordBarLoad();
  };

  record = () => {
    this.audioRecordingService.language = 'fr-FR';
    this.audioRecordingService.start();
  };

  putTitle = () => {
    const language = this.user === 'advisor' ? this.settingsService.advisor.language : this.settingsService.guest.value.language;
    this.text = VOCABULARY_V2.find(item => item.isoCode === language).sentences.find(s => s.key === 'record-text').value;
  };

  private recordBarLoad = () => {
    const value: number = 100 / (this.duration * 10);
    let time: number = 0;
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.width = this.width + value;
        time += 100;
      }
      if (time === 1000) {
        this.seconds++;
        time = 0;
      }

      if (this.width > 100) {
        this.width = 100;
      }

      if (this.width >= 100) {
        this.timeOut();
      }
    }, 100);
  };

  pauseOrResume = () => {
    this.isPaused = !this.isPaused;
  };

  sendSpeech = async (): Promise<void> => {
    console.log('sendSpeech');
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    this.audioRecordingService.stop();
    this.send.emit(false);
  };

  exitAudio = async () => {
    if (this.intervalId !== undefined) {
      console.log('exitAudio');
      clearInterval(this.intervalId);
      this.intervalId = undefined;
      const speechToText = await this.audioRecordingService.end();
      console.log('speechToText before emit:', speechToText);
      this.exit.emit(speechToText);
    } 
  };

  retry = async (): Promise<void> => {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
      //this.recorder.stop();
      this.audioRecordingService.stop();
    }
    this.width = 0;
    this.seconds = 0;
    this.start();
  };

  private timeOut = async (): Promise<void> => {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    //this.recorder.stop();
    this.audioRecordingService.stop();
    this.send.emit(true);
  };
}
