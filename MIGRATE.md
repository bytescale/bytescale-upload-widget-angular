# Migration Guide

## From Angular Uploader (`angular-uploader`)

Steps:

1. Install `@bytescale/upload-widget-angular`
2. Uninstall `angular-uploader` and `uploader`
3. Replace `"angular-uploader"` with `"@bytescale/upload-widget-angular"` in your `import` statements.
4. Replace `uploader` with `upload-widget` in all CSS class name overrides (if you have any).
5. Remove `uploader` (from imports and props)
6. Add `apiKey` as a field to the object passed to the `options` prop (add it if you don't have one).

### Before

#### Initialization

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UploaderModule } from "angular-uploader";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UploaderModule // <-- Add the Uploader module here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### The `uploadButton` directive

```typescript
import { Component } from "@angular/core";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <a href="{{ uploadedFileUrl }}" target="_blank">{{ uploadedFileUrl }}</a>
    <button uploadButton [uploadComplete]="onComplete" [uploadOptions]="options" [uploader]="uploader">
      Upload a file...
    </button>
  `
})
export class AppComponent {
  uploader = Uploader({
    apiKey: "free" // <-- Get production-ready API keys from Bytescale
  });
  options: UploadWidgetConfig = {
    multi: false
  };
  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
  };
  uploadedFileUrl = undefined;
}
```

#### The `upload-dropzone` component

```typescript
import { Component } from "@angular/core";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <upload-dropzone [uploader]="uploader" [options]="options" [onUpdate]="onUpdate" [width]="width" [height]="height">
    </upload-dropzone>
  `
})
export class AppComponent {
  uploader = Uploader({
    apiKey: "free"
  });
  options: UploadWidgetConfig = {
    multi: false
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map(x => x.fileUrl).join("\n"));
  };
  width = "600px";
  height = "375px";
}
```

### After

#### Initialization

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UploadWidgetModule // <-- Add the UploadWidgetModule here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### The `uploadButton` directive

```typescript
import { Component } from "@angular/core";
import { UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

@Component({
  selector: "app-root",
  template: `
    <a href="{{ uploadedFileUrl }}" target="_blank">{{ uploadedFileUrl }}</a>
    <button uploadButton [uploadOptions]="options" [uploadComplete]="onComplete">Upload a file...</button>
  `
})
export class AppComponent {
  options: UploadWidgetConfig = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    multi: false
  };
  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
  };
  uploadedFileUrl = undefined;
}
```

#### The `upload-dropzone` component

```typescript
import { Component } from "@angular/core";
import { UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

@Component({
  selector: "app-root",
  template: `
    <upload-dropzone [options]="options" [onUpdate]="onUpdate" [width]="width" [height]="height"> </upload-dropzone>
  `
})
export class AppComponent {
  options: UploadWidgetConfig = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    multi: false
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map(x => x.fileUrl).join("\n"));
  };
  width = "600px";
  height = "375px";
}
```

## See also

Bytescale migration guides listed below:

- [Migrating from `upload-js` to `@bytescale/sdk`](https://github.com/bytescale/bytescale-javascript-sdk/blob/main/MIGRATE.md)
- [Migrating from `uploader` to `@bytescale/upload-widget`](https://github.com/bytescale/bytescale-upload-widget/blob/main/MIGRATE.md)
- [Migrating from `angular-uploader` to `@bytescale/upload-widget-angular`](https://github.com/bytescale/bytescale-upload-widget-angular/blob/main/MIGRATE.md)
- [Migrating from `angular-uploader` to `@bytescale/upload-widget-angular`](https://github.com/bytescale/bytescale-upload-widget-angular/blob/main/MIGRATE.md)
- [Migrating from `@upload-io/vue-uploader` to `@bytescale/upload-widget-vue`](https://github.com/bytescale/bytescale-upload-widget-vue/blob/main/MIGRATE.md)
- [Migrating from `@upload-io/jquery-uploader` to `@bytescale/upload-widget-jquery`](https://github.com/bytescale/bytescale-upload-widget-jquery/blob/main/MIGRATE.md)
