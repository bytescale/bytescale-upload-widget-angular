import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "upload-dropzone",
  template: `
    <div #container style="position: relative; width: 100%; maxWidth: {{ width }}; height: {{ height }}"></div>
  `,
  styles: []
})
export class UploadDropzoneComponent implements AfterViewInit {
  @Input("uploadOptions") options?: UploaderOptions;
  @Input("uploader") uploader?: Uploader;
  @Input("uploadComplete") onComplete?: (files: UploaderResult[]) => void;
  @Input("width") width: string = "600px";
  @Input("height") height?: string = "375px";

  @ViewChild("container") container!: ElementRef;

  ngAfterViewInit() {
    this.getUploader()
      .open({
        ...(this.options !== undefined ? this.options : {}),
        container: this.container.nativeElement,
        layout: "inline"
      })
      .then(
        files => {
          if (this.onComplete !== undefined) {
            this.onComplete(files);
          }
        },
        error => console.error("Uploader error.", error)
      );
  }

  private getUploader(): Uploader {
    if (this.uploader === undefined) {
      throw new Error("[angular-uploader] You must provide the 'uploader' attribute to 'upload-dropzone' components.");
    }

    return this.uploader;
  }
}
