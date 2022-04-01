# Building From Source

This repository contains a hot-reloading sandbox for developing the `angular-uploader` NPM package.

## Prerequisites

`node`, `npm` and `ng` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v12.22.0 |
| NPM     | v6.14.11 |
| ng      | v13.3.1  |

## Repository Structure

This repository comprises 2 projects:

- `/projects/angular-uploader`: contains the `angular-uploader` library itself.
- `/projects/sandbox`: provides a hot-reloading sandbox for developing the `angular-uploader` library.

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:upload-io/angular-uploader.git
cd angular-uploader
```

### 2. Install Dependencies

```shell
npm install
(cd projects/angular-uploader && npm install)
```

### 3. Run The Sandbox

In one terminal:

```shell
ng build angular-uploader --watch
```

In another terminal:

```shell
npm start
```

The above launches a **hot-reloading** server on `http://127.0.0.1:4200` that uses `angular-uploader` from source.

_Please ensure nothing else is running on TCP port `4200`_.
