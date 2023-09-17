import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UploadWidgetModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
