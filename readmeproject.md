SETTING UP AN EXPRESS PROJECT

1- install express
    1.1- npm i express
2- as a development dependency (-D) install typescript with types node and express
    2.1- npm i -D typescript @types/node @types/express
3- create a typescript compiler configuration file
    3.1- tsc --init
4- install server as a development dependency (-D)
    4.1- npm i -D nodemon
5- package.json change start
    5.1- "scripts": {
            "start": "ts-node index.ts"
         },
    5.2- "scripts": {
            "start": "nodemon index.ts"
         },
6- start server
    6.1- npm start
-----------------------------------------
error handling post request comes because express by default don't parse incoming request body, to solve this problem you have to install a special middleware

app.use(express.json());