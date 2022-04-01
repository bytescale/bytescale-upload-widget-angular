<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Uploader" width="276" height="80" src="https://raw.githubusercontent.com/upload-io/assets/master/logo-uploader.svg">
  </a>
</h1>

<p align="center"><b>Angular File Upload Component for <a href="https://upload.io/">Upload.io</a></b><br/> (Angular Wrapper for <a href="https://upload.io/uploader">Uploader</a>)</p>
<br/>
<p align="center">
  <a href="https://github.com/upload-io/uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/uploader">
    <img src="https://img.shields.io/badge/uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/uploader">
    <img src="https://img.shields.io/npm/dt/uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>

# Quick Start

To create a file upload button:

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

## Components & Directives

`angular-uploader` provides two options for adding a file uploader to your app:

### (1) `uploadButton` directive

The `uploadButton` directive causes the element to display a file upload modal on click.

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

### (2) Dropzone

The `upload-dropzone` component renders an inline drag-and-drop file uploader.

Inputs:

- `uploader` (required): an instance of the [`Uploader` class](https://github.com/upload-io/uploader/blob/main/lib/src/Uploader.tsx).
- `uploadOptions` (optional): an object following the [`UploaderOptions` interface](https://github.com/upload-io/uploader/blob/main/lib/src/UploaderOptions.ts).
- `uploadComplete` (optional): a callback containing a single parameter — an array of uploaded files.
- `width` (optional): width of the dropzone.
- `height` (optional): height of the dropzone.

```typescript
import { Component } from "@angular/core";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

@Component({
  selector: "app-root",
  template: `
    <upload-dropzone [uploader]="uploader" 
                     [uploadOptions]="uploadOptions"
                     [width]="width"
                     [height]="height"> 
    </upload-dropzone>
  `
})
export class AppComponent {
  uploader = new Uploader({ 
    apiKey: "free" 
  });
  uploadOptions: UploaderOptions = {
    multi: false,

    // 'onUpdate' explained:
    // - Dropzones are non-terminal by default (i.e. they don't have an
    //   end state), so we use the 'onUpdate' option instead of the
    //   'uploadComplete' component attribute to receive files. 
    // - To create a terminal dropzone, add a 'uploadComplete' attribute
    //   to the component and add the following option here:
    // showFinishButton: true
    onUpdate: (files: UploaderResult[]) => {
      console.log(files.map(x => x.fileUrl));
    }
  };
  width = "600px"
  height = "375px"
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

`angular-uploader` is an Angular wrapper for `uploader`.

Please see: **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)**.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
