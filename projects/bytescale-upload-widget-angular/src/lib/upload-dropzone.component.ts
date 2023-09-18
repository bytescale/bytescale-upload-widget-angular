import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";
import { UploadWidgetOnUpdateEvent } from "@bytescale/upload-widget/dist/config/UploadWidgetOnUpdateEvent";

@Component({
  selector: "upload-dropzone",
  template: `
    <div
      #container
      style="position: relative; width: 100%; min-width: 280px; maxWidth: {{ width }}; height: {{ height }}"
    ></div>
  `,
  styles: []
})
export class UploadDropzoneComponent implements AfterViewInit {
  @Input("options") options?: UploadWidgetConfig;
  @Input("onComplete") onComplete?: (files: UploadWidgetResult[]) => void;
  @Input("onUpdate") onUpdate?: (event: UploadWidgetOnUpdateEvent) => void;
  @Input("width") width: string = "600px";
  @Input("height") height: string = "375px";

  @ViewChild("container") container!: ElementRef;

  ngAfterViewInit() {
    const onUpdateParams: Partial<UploadWidgetConfig> = this.onUpdate === undefined ? {} : { onUpdate: this.onUpdate };

    UploadWidget.open({
      ...this.getOptions(),
      ...onUpdateParams,
      container: this.container.nativeElement,
      layout: "inline"
    }).then(
      files => {
        if (this.onComplete !== undefined) {
          this.onComplete(files);
        }
      },
      error => console.error("Uploader error.", error)
    );
  }

  private getOptions(): UploadWidgetConfig {
    if (this.options === undefined) {
      throw new Error(
        "[bytescale-upload-widget] You must provide the 'options' attribute to the 'UploadDropzone' component."
      );
    }

    return this.options;
  }
}
