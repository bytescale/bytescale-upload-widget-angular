import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UploaderModule } from "angular-uploader";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UploaderModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
