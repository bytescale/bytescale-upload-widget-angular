import { Component } from "@angular/core";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <div>
      <button
        id="uploadButton"
        uploadButton
        [uploader]="uploader"
        [uploadComplete]="uploadComplete"
        [uploadOptions]="uploadOptions"
      >
        Upload...
      </button>
      <upload-dropzone id="dropzone" [uploader]="uploader" [onUpdate]="uploadComplete" [options]="uploadOptions">
      </upload-dropzone>
    </div>
  `
})
export class AppComponent {
  uploader = Uploader({ apiKey: "free" });
  uploadComplete = (files: UploadWidgetResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  uploadOptions: UploadWidgetConfig = {
    multi: false
  };
}
