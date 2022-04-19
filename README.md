<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Angular Uploader" width="264" height="106" src="https://raw.githubusercontent.com/upload-io/angular-uploader/main/.github/assets/logo.svg">
  </a>
</h1>

<p align="center"><b>Angular File Upload Widget</b><br/> (With Integrated Cloud Storage)</p>

<p align="center">Angular Wrapper for <a href="https://upload.io/uploader">Uploader</a> • Developed by <a href="https://upload.io/">Upload.io</a><br/><br/></p>

<p align="center">
  <a href="https://github.com/upload-io/angular-uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/angular-uploader">
    <img src="https://img.shields.io/badge/angular--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/angular-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/angular-uploader">
    <img src="https://img.shields.io/npm/dt/angular-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/angular-uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/angular-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/angular-uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>

<h1 align="center">
  Quick Start —
  <a href="https://codesandbox.io/s/angular-uploader-urtrmz?file=/src/app/app.component.ts">Try Live Demo</a>
</h1>

<p align="center"><a href="https://upload.io/uploader"><img alt="Upload Widget Demo" width="100%" src="https://raw.githubusercontent.com/upload-io/angular-uploader/main/.github/assets/demo.webp"></a></p>

<p align="center">To implement the above widget:</p>

```shell
npm install angular-uploader
```

**app.module.ts**

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

**app.component.ts**

```typescript
import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <button uploadButton 
            [uploadComplete]="uploadComplete" 
            [uploadOptions]="uploadOptions" 
            [uploader]="uploader">
      Upload a file...
    </button>
  `
})
export class AppComponent {
  uploader = new Uploader({ 
    apiKey: "free" // <-- Get production-ready API keys from Upload.io
  });
  uploadOptions: UploaderOptions = {
    multi: false
  };
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
}
```

# Installation

Install via NPM:

```shell
npm install angular-uploader
```

Or via YARN:

```shell
yarn add angular-uploader
```

## Initialization

Add the `UploaderModule` to your app:

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

## Components & Directives

Choose one of these options:

### Option 1: Use the `uploadButton` directive

The `uploadButton` directive displays a file upload modal on click.

Inputs:

- `uploader` (required): an instance of the [`Uploader` class](https://github.com/upload-io/uploader/blob/main/lib/src/Uploader.tsx).
- `uploadOptions` (optional): an object following the [`UploaderOptions` interface](https://github.com/upload-io/uploader/blob/main/lib/src/UploaderOptions.ts).
- `uploadComplete` (optional): a callback containing a single parameter — an array of uploaded files.

```typescript
import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <button uploadButton 
            [uploader]="uploader"
            [uploadOptions]="uploadOptions"
            [uploadComplete]="uploadComplete">
      Upload a file...
    </button>
  `
})
export class AppComponent {
  uploader = new Uploader({ 
    apiKey: "free" 
  });
  uploadOptions: UploaderOptions = {
    multi: false
  };
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
}
```

### Option 2: Use the `upload-dropzone` component

The `upload-dropzone` component renders an inline drag-and-drop file uploader.

Inputs:

- `uploader` (required): an instance of the [`Uploader` class](https://github.com/upload-io/uploader/blob/main/lib/src/Uploader.tsx).
- `options` (optional): an object following the [`UploaderOptions` interface](https://github.com/upload-io/uploader/blob/main/lib/src/UploaderOptions.ts).
- `onComplete` (optional): a callback containing the array of uploaded files as its parameter.
- `onUpdate` (optional): same as above, but called after every file upload or removal.
- `width` (optional): width of the dropzone.
- `height` (optional): height of the dropzone.

```typescript
import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <upload-dropzone [uploader]="uploader" 
                     [options]="options"
                     [onUpdate]="onUpdate"
                     [width]="width"
                     [height]="height"> 
    </upload-dropzone>
  `
})
export class AppComponent {
  uploader = new Uploader({ 
    apiKey: "free" 
  });
  options: UploaderOptions = {
    multi: false
  };
  // 'onUpdate' explained:
  // - Dropzones are non-terminal by default (i.e. they don't have an
  //   end state), so we use 'onUpdate' instead of 'onComplete'. 
  // - To create a terminal dropzone, add a 'onComplete' attribute
  //   to the component and add the 'showFinishButton: true' option.
  onUpdate = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  width = "600px";
  height = "375px";
}
```

## The Result

The callbacks receive a `Array<UploaderResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",          // The URL to use when serving this file.

  editedFile: undefined,                        // The edited file (if present). Same as below.

  originalFile: {
    accountId: "FW251aX",                       // The Upload.io account that owns the file.
    file: { ... },                              // DOM file object (from the <input> element).
    fileId: "FW251aXa9ku...",                   // The uploaded file ID.
    fileUrl: "https://upcdn.io/FW25...",        // The uploaded file URL.
    fileSize: 12345,                            // File size in bytes.
    mime: "image/jpeg",                         // File MIME type.
    suggestedOptimization: {
      transformationUrl: "https://upcdn.io/..", // The suggested URL for serving this file.
      transformationSlug: "thumbnail"           // Append to 'fileUrl' to produce the above URL.
    },
    tags: [                                     // Tags manually & auto-assigned to this file.
      { name: "tag1", searchable: true },
      { name: "tag2", searchable: true },
      ...
    ]
  }
}
```

## Full Documentation

Angular Uploader is a wrapper for Uploader — see the **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)** 📖

## Where are my files stored?

Uploader uses [Upload.io](https://upload.io) as a storage and file hosting backend.

Upload.io benefits developers with:

- Zero Setup (Start uploading in the next few minutes!)
- Pre-Integrated Storage (All you need is an Upload API key)
- Fast File Hosting (Worldwide CDN, 300 Nodes)
- Powerful Rules Engine (Rate Limiting, Traffic Limiting, IP Blacklisting, Expiring Links, etc)
- File Transformations (Image Resizing, Cropping, Optimization, etc)

### Can I bring my own file storage?

Uploader's USP is to provide developers with the least amount of work possible, while remaining customizable. As such, Uploader will always be closely integrated with the Upload.io platform, and there are currently no plans to support custom backends. You may, however, sync files from your Upload.io account to a custom storage target.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/angular-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
