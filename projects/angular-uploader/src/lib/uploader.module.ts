import { NgModule } from '@angular/core';
import { UploadDropzoneComponent } from './upload-dropzone.component';
import { UploadButtonDirective } from './upload-button.directive';

@NgModule({
  declarations: [
    UploadDropzoneComponent,
    UploadButtonDirective
  ],
  imports: [
  ],
  exports: [
    UploadDropzoneComponent,
    UploadButtonDirective
  ]
})
export class UploaderModule { }
