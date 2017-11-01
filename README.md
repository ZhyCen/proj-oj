# README


THIS IS ONLINE JUDGE PROJECT

## TECH STACK
Front-end: Angular4
Backend: NodeJs + Express
Database: MongoDB

## Procedure

### PACKAGE NEEDED
```
angular-cli
modejs
npm
nodemon
express
```

### WEEK 1
- finish the front-end part, where it is able to display questions.

to clone and run the program **for week1**

#### copy and enter week1 folder
```
git clone git@github.com:zhycen/proj-oj.git
cd ./proj-oj/week1/oj-client
```

#### install depencecies
```
npm install
```

#### run client server
```
ng serve
```

check the website on `localhost:4200`

### WEEK 2
- finish the front-end part, back-end part, that user can add questions themselves. the json data will be stored on [mlab.com](mlab.com).
- Data will be dyamically add and show on the problem page.

to clone and run the program **for week1**

#### copy and enter week2 folder
```
git clone git@github.com:zhycen/proj-oj.git
cd ./proj-oj/week2/
```

#### install depencecies for both client server and backend server 

```
cd oj-server
npm install
cd ../oj-client
npm install
```

#### run client server and backend server
```
// in oj-client root folder
ng build --watch

// in oj-server root folder
nodemon server
```

check the website on `localhost:3000`





