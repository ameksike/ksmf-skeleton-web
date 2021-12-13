# Client Side 
Client Side is the code that is executed in web browsers in order to implement interaction with users through graphical interfaces, generally uses framweworks and libraries such as [Angular](https://angular.io/docs), [React](https://en.reactjs.org/docs/getting-started.html), [VueJs](https://vuejs.org/v2/guide/), [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/), etc.

## Angular
Angular is a development platform, built on TypeScript. As a platform, Angular includes:

- A component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.
- A suite of developer tools to help you develop, build, test, and update your code

With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

See the [live example](https://angular.io/generated/live-examples/what-is-angular/stackblitz.html) / [download example](https://angular.io/generated/zips/what-is-angular/what-is-angular.zip) for a working example containing the code snippets in this guide.

### Angular Develop Steps
- npm install -g @angular/cli
- ng new client
- cd client/
- ng serve --open 
- ng generate component cli
- ng generate component doc
- ng generate component social
- ng generate component toolbar
- ng generate component footer
- ng generate service backend

It will create a directory called *client* inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
client/
├── README.md
├── package.json
├── .gitignore
├── .angular
├── .vscode
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── karma.conf.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── node_modules/
├── dist/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── app
    │   ├── cli/
    │   ├── doc/
    │   ├── footer/
    │   ├── toolbar/
    │   ├── app.component.html
    │   ├── app.component.scss
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   ├── app-routing.module.ts
    │   ├── backend.service.ts
    │   └── backend.service.spec.ts
    ├── assets/
    ├── environments/
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    ├── polyfills.ts
    ├── styles.scss
    └── test.ts
```
For mor information see [Angular docs](https://angular.io/start).

## React
React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or [in the tutorial](https://en.reactjs.org/tutorial/tutorial.html).

React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started. 

### React Develop Steps
- npm install -g create-react-app
- npm init react-app client
- cd client
- npm start
- npm run build

It will create a directory called *client* inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
client/
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
- Hassle-free updates for the above tools with a single dependency.

For mor information see [create-react-app](https://github.com/facebook/create-react-app).