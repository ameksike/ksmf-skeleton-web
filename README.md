# KsMf skeleton Full Stack Web App
This application prototype offers a general structure that allows you to create full stack projects. Note that a full stack application is one that contains both code that runs in web browsers with Graphical User Interfaces (GUI), and code that runs on the server to implement business logic.

- The code that is executed in web browsers to implement interaction with users through graphical interfaces, generally uses framweworks and libraries such as [Angular](https://angular.io/docs), [React](https://en.reactjs.org/docs/getting-started.html), [VueJs](https://vuejs.org/v2/guide/), [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/), etc.

- Usually the code that is executed on the server side implements the business logic of the problem that you trying to automate, using styles and solution patterns such as [RESTful API](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional), [DDD](https://en.wikipedia.org/wiki/Domain-driven_design), [SOLID](https://es.wikipedia.org/wiki/SOLID), etc. It is also used to compose this type of solutions, frameworks such as [KsMf](https://github.com/ameksike/ksmf/wiki), [ExpressJs](https://expressjs.com/es/), [NextJs](https://nextjs.org/), etc.

## Install
- git clone https://github.com/ameksike/ksmf-skeleton-web.git
- mv ./ksmf-skeleton-web ./myproject   #... rename project folder
- cd myproject
- npm install 

## Develop
- npm run client:watch
- npm run dev

## Skeleton
Below you can see the general structure of a full stack project:
```
+ client/
+ server/
- LICENSE
- README.md
- package.json
- .gitignore
- .env
```

- **client:** This directory contains a classic application based on technologies such as Angular, React, VueJs, etc. For more information see [client description](https://github.com/ameksike/ksmf-skeleton-web/tree/main/client).
- **server:** This directory contains the source code that runs on the server side, it is usually associated with the web API (database access, remote endpoint access, business logic, etc.)
- **LICENSE:** Product license description file
- **package.json:** The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
- **.gitignore:** The . gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. The .gitignore file itself is a plain text document.
- **.env:** A . env file is a text file containing key value pairs of all the environment variables required by your application. This file is included with your project locally but not saved to source control so that you aren't putting potentially sensitive information at risk.

## Docker: Building your own Image 
- docker build -t ksmf-skeleton-web .
- docker images 

## Docker: Run image  
- docker run --name myapp --env APPNAME=myapp_v1.0.1 -it -dp 3333:3005 ksmf-skeleton-web 
- docker ps -a
- http://localhost:3333
- http://localhost:3333/api/v1/profile
- docker exec -it myapp bash 
- docker stop myapp

## Docker Compose: Building your own image 
- docker-compose build
- docker images

## Docker Compose: Run your own image  
- docker-compose up -d
- http://localhost:5003/api/v1/security/oauth/option
- docker-compose stop
