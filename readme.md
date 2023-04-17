1- to use node with typescript file we have 2 options:
    1.1- compile tsc index.ts to index.js and then node index.js
    1.2- or npm init -y to generate a basic package.json file
        1.2.1- as a development dependency (-D) install npm i -D ts-node
2- now on package.json
    2.1- "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
           },
        2.1.2- delete test and add a new line "start"
    2.2- "scripts": {
            "start": "ts-node index.ts"
        },
        2.2.1 start will combine the process of converting from ts to js and then running in node, everything in one step
    2.3- or installed globally in your machine to open powershell as an admin and npm i -g ts-node
        2.3.1- ts-node index.ts