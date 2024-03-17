import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-angular-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class AngularVideoPlayerComponent implements OnInit, OnDestroy {
  player: any;
  @Input() videoLink: string = '';
  isMuted: boolean = false;
  muteLabel: string = "Mute";
  constructor() { }

  ngOnInit(): void {
    this.player = videojs('video-source');
  }

  playVideo(): void {
    this.player.play();
  }

  restartVideo(): void {
    this.player.currentTime(0);
    this.playVideo();
  }

  pauseVideo(): void {
    this.player.pause();
  }

  muteVideo(): void {
    if(!this.isMuted){
      this.isMuted = true;
      this.muteLabel = 'Unmute';
      this.player.muted(true);
    } else{
      this.isMuted = false;
      this.muteLabel = 'Mute';
      this.player.muted(false);
    }
  }

   // Dispose the player OnDestroy
   ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
