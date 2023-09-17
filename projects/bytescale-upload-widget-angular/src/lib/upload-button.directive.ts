import { Directive, HostListener, Input, OnInit } from "@angular/core";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

@Directive({
  selector: "[uploadButton]"
})
export class UploadButtonDirective implements OnInit {
  @Input("uploadOptions") options?: UploadWidgetConfig;
  @Input("uploadComplete") onComplete?: (files: UploadWidgetResult[]) => void;

  @HostListener("click", ["$event"]) onClick(event: any) {
    event.preventDefault();
    UploadWidget.open(this.getOptions()).then(
      files => {
        if (this.onComplete !== undefined) {
          this.onComplete(files);
        }
      },
      error => console.error("Uploader error.", error)
    );
  }

  ngOnInit(): void {
    try {
      this.getOptions();
    } catch (e) {
      console.error(e);
    }
  }

  private getOptions(): UploadWidgetConfig {
    if (this.options === undefined) {
      throw new Error(
        "[bytescale-upload-widget] You must provide the 'uploadOptions' attribute to elements marked with the 'uploadButton' directive."
      );
    }

    return this.options;
  }
}
