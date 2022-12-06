import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

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
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  uploadOptions: UploaderOptions = {
    multi: false
  };
}
