# NeopsWebSdk

Neops Web SDK is the dev environment for the neops client, services and components. It is a standard Angular projects **with libraries**

You'll find

- The [App (./src/app)](./src/app): Dev Environment for development and testing
- [Libraries (./projects)](./projects): Libraries, which are automatically published on git tag and reused in neops projects

## Setup

We use GitHub as our npm registry. Although the packages are public, you need to log in with your user. When asked for password, it is recommended to enter a token instead of the password.  

You can generate a token here: https://github.com/settings/tokens

```shell
npm login --scope=@zebbra --registry=https://npm.pkg.github.com
npm install
```

Start the application in your favourite IDE or run 'ng serve'. 

## Carbon component libraries

Our Design is based on the carbon design system. There are two main projects for components we use:

- [Base components](https://angular.carbondesignsystem.com/?path=/story/components-welcome--to-carbon-angular)
- [Chart components](https://charts.carbondesignsystem.com/angular/?path=/story/intro--welcome)

## Angular help

- 'ng --help' for CLI instructions
- https://angular.io/ for introduction
- [The Angular Readme for a quick overview](./ANGULAR-README.md)
