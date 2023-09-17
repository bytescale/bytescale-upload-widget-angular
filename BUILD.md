# Building From Source

This repository contains a hot-reloading sandbox for developing the `@bytescale/upload-widget-angular` NPM package.

## Prerequisites

`node`, `npm` and `ng` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v18.12.1 |
| NPM     | v8.19.2  |
| ng      | v13.3.1  |

## Repository Structure

This repository comprises 2 projects:

- `/projects/bytescale-upload-widget-angular`: contains the `@bytescale/upload-widget-angular` library itself.
- `/projects/sandbox`: provides a hot-reloading sandbox for developing the `@bytescale/upload-widget-angular` library.

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:bytescale/upload-widget-angular.git
cd upload-widget-angular
```

### 2. Install Dependencies

```shell
npm install
```

### 3. Run The Sandbox

In one terminal:

```shell
ng build bytescale-upload-widget-angular --watch
```

In another terminal:

```shell
npm start
```

The above launches a **hot-reloading** server on `http://127.0.0.1:4200` that uses `@bytescale/upload-widget-angular` from source.

_Please ensure nothing else is running on TCP port `4200`_.
