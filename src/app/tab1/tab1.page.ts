import { Component } from '@angular/core';
import {MediaCapture} from '@awesome-cordova-plugins/media-capture/ngx';
import {CaptureError, MediaFile} from '@awesome-cordova-plugins/media-capture/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private mediaCapture: MediaCapture
  ) {}

  recordVideo() {
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
          // this.copyFileToLocalDir(data[0].fullPath);
          alert(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }

}
