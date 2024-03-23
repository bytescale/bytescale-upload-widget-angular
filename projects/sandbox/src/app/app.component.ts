import { Component } from "@angular/core";
import { UploadWidgetConfig, UploadWidgetOnUpdateEvent, UploadWidgetResult } from "@bytescale/upload-widget";

@Component({
  selector: "app-root",
  template: `
    <div>
      <button id="uploadButton" uploadButton [uploadComplete]="handleOnComplete" [uploadOptions]="uploadOptions">
        Upload...
      </button>
      <upload-dropzone id="dropzone" [onUpdate]="handleOnUpdate" [options]="uploadOptions"> </upload-dropzone>
    </div>
  `
})
export class AppComponent {
  handleOnComplete = (files: UploadWidgetResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  handleOnUpdate = ({ uploadedFiles }: UploadWidgetOnUpdateEvent) => {
    console.log(uploadedFiles.map(x => x.fileUrl));
  };
  uploadOptions: UploadWidgetConfig = {
    apiKey: "free",
    multi: false
  };
}
