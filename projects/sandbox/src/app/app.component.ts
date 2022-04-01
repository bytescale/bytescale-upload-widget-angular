import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <div>
      <button uploadButton [uploadComplete]="uploadComplete" [uploadOptions]="uploadOptions" [uploader]="uploader">
        Upload...
      </button>
      <upload-dropzone [uploadOptions]="uploadOptionsForDropzone" [uploader]="uploader"> </upload-dropzone>
    </div>
  `,
  styles: []
})
export class AppComponent {
  uploader = new Uploader({ apiKey: "free" });
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  uploadOptions: UploaderOptions = {
    multi: false
  };
  uploadOptionsForDropzone: UploaderOptions = {
    ...this.uploadOptions,
    onUpdate: this.uploadComplete // 'uploadComplete' doesn't fire by default for dropzones, as they're non-terminal.
  };
}
