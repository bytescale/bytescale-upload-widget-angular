import { Component } from "@angular/core";
import { UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

@Component({
  selector: "app-root",
  template: `
    <div>
      <button id="uploadButton" uploadButton [uploadComplete]="uploadComplete" [uploadOptions]="uploadOptions">
        Upload...
      </button>
      <upload-dropzone id="dropzone" [onUpdate]="uploadComplete" [options]="uploadOptions"> </upload-dropzone>
    </div>
  `
})
export class AppComponent {
  uploadComplete = (files: UploadWidgetResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  uploadOptions: UploadWidgetConfig = {
    apiKey: "free",
    multi: false
  };
}
