import { Component, OnInit } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  player: any;

  constructor() { }

  ngOnInit(): void {
    this.player = videojs('my-video');
  }

  play(): void {
    this.player.play();
  }

  restart(): void {
    this.player.currentTime(0);
    this.player.play();
  }

  fastForward(): void {
    const currentTime = this.player.currentTime();
    this.player.currentTime(currentTime + 10);
  }
  fastBackward(): void {
    const currentTime = this.player.currentTime();
    this.player.currentTime(currentTime - 10);
  }

  pause(): void {
    this.player.pause();
  }

}
