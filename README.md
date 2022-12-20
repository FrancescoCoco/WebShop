# WEB SHOP 
> The idea of this project is to reproduce the functionality of a web shop locally. 

[![][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

> Technologies: 

- Angular
- NodeJS Server 
- Stripe 

## ANGULAR COMMANDS 
- Create Project

    ```
    ng new store 
    ```
- Install node_module 
    ```
    npm i 
    ```
- Add dependencies 
    ``` 
    npm i name_of_dependencies
    ```
- Components
    ```
    ng g c Components/name_component
    ```
- Interface 
    ```
    ng g i Models/nome_models
    ```
- Service 
    ```
    ng g s Services/nome_services
    ```

## PRELIMINARY OPERATIONS

- Install [NodeJS](https://nodejs.org/it/download/)
- Install AngularCli from your terminal
    ```
  npm i @angular/cli@14.2.1
    ```

- Install [angular material](https://material.angular.io/components/categories)   
    ```
    ng add @angular/material
    ```
- Use [tailwindcss](https://tailwindcss.com) 
    ```
    npm install -D tailwindcss postcss autoprefixer
    ```
    ```
    npx tailwindcss init
    ```



## Installation
After you pull this repository, go to folder store. 

To execute the project run these commands: 

```
npm install 
ng serve --open
```

In another terminal run this commands: 

```
cd server 
```
```
npm init -y
```
```
npm i cors@2.8.5 express@4.18 stripe@10.7.0
```
```
node server.js
```


## Release History

* 0.1.0
    * Complete Project
* 0.0.1
    * Work in progress


## Dependencies 

    "dependencies": {
        "@angular/animations": "^15.0.0",
        "@angular/cdk": "^15.0.3",
        "@angular/common": "^15.0.0",
        "@angular/compiler": "^15.0.0",
        "@angular/core": "^15.0.0",
        "@angular/forms": "^15.0.0",
        "@angular/material": "^15.0.3",
        "@angular/platform-browser": "^15.0.0",
        "@angular/platform-browser-dynamic": "^15.0.0",
        "@angular/router": "^15.0.0",
        "@stripe/stripe-js": "1.35",
        "rxjs": "~7.5.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.12.0"
    },
    "devDependencies": {
        "@angular-devkit/build-angular": "^15.0.4",
        "@angular/cli": "~15.0.4",
        "@angular/compiler-cli": "^15.0.0",
        "autoprefixer": "^10.4.13",
        "postcss": "^8.4.20",
        "tailwindcss": "^3.2.4",
        "typescript": "~4.8.2"
    }

## PAGES OF APPLICATION 

- Homepage 
    ![Home-Page]
    ![Home-Page-Cart]
- Cart-Page
    ![Cart-Page]
- Stripe CheckOut-Page
    ![CheckOut]



<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
[Home-Page]: utils/HomePage.png
[Home-Page-Cart]: utils/HomePageCart.png
[Cart-Page]: utils/CartPage.png
[CheckOut]: utils/StripeCheckOutPage.png
[NPM VERSION]: 'v9.2.0'
