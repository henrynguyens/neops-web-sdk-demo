# Developer Playground

The developer playground is used to test libraries and create prototypes. Only code in libraries will get published and used in products.

## Create a new library

```shell
ng generate library @zebbra/ngx-neops-<name> --prefix neops
```

To be able to debug the libraries easily, either:

- add under serve/options:

```json
{
  "sourceMap": {
  "scripts": true,
  "styles": true,
  "vendor": true
  }
}
```

- or let the library be built directly (switch in tsconfig from "dist" to actual source)


Add following to package.json

```json
{
  "keywords": [
    "neops"
  ],
  "author": "Zebbra AG",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": "git://github.com/zebbra/neops-web-sdk.git"
}
```

## Pull packages

To pull correctly, set the npm config

```shell
npm config set @zebbra:registry https://npm.pkg.github.com
```
