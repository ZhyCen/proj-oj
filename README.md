# README

THIS IS ONLINE JUDGE PROJECT

## TECH STAC
```
Front-end: Angular4
Backend: NodeJs + Express
Database: MongoDB
```

## PACKAGE NEEDED
```
angular-cli
modejs
npm
nodemon
express
```

## WEEK 1
finish the front-end part, where it is able to display questions.

To clone and run the program **for week1**

### copy and enter week1 folder
```
git clone git@github.com:zhycen/proj-oj.git
cd ./proj-oj/week1/oj-client
```

### install depencecies
```
npm install
```

### run client server
```
ng serve
```

check the website on `localhost:4200`

## WEEK 2
finish the front-end part, part of back-end part that user can add questions themselves. the json data will be stored on [mlab.com](mlab.com).

Data will be dyamically add and show on the problem page.

To clone and run the program **for week2**

### copy and enter week2 folder
```
git clone git@github.com:zhycen/proj-oj.git
cd ./proj-oj/week2/
```

### install depencecies for both client server and backend server

```
// in oj-client root folder
npm install

// in oj-server root folder
npm install
```

### run client server and backend server
```
// in oj-client root folder
ng build --watch

// in oj-server root folder
nodemon server
```

check the website on `localhost:3000`

## WEEK 3

add ACE editor near question details. that allow users to type codes in different languages.

utilized socket.io to establish connections between users and make it collaborative.

utilized redis to restore the history of code.

### launch app
```
cd week3
chmod +x launcher.sh
./launcher
```
this file will install all the dependencies and run the services, to stop the service, just press `Enter`.


# WEEK 4

add Docker and Flask into backend, that execute the code that written in ACE editor.

Return result into front-ent.

### launch app
```
cd week3
chmod +x launcher.sh
./launcher
```
this file will install all the dependencies and run the services, to stop the service, just press `Enter`.
