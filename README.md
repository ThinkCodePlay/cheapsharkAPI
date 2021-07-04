# CheapsharkAPI
### Server side Node.js tutorial

#### This is the source code for the CheaprsharkAPI tutorial from my blog htts://thinkcodeplay.com.

Content links:
- [Part 01] - Node and Express setup
- [Part  02] - Http request using axios
- [Part 03] - MongoDB and Mongoose
- [Part 04] - Testing using jest
- [Part 05] - User Authentication using JWTs

## Installation

Cheapshark requires [Node.js](https://nodejs.org/) run.

Install the dependencies and devDependencies and start the server:

```sh
cd CheapsharkAPI
npm install
npm run dev
```

For running MongoDB database change the path of your MongoDB server in **package.json** scripts:
```
"scripts": {
    "mongo": "D:/Documents/mongodb/bin/mongod.exe --dbpath=D:/Documents/mongodb-data"
  },
```
Then run:
```
npm run mongo
```

To run tests:
```
npm run test
```


[//]: #
[Part 01]: <https://thinkcodeplay.com/-stack-guide-wishlist-part-1-node-and-express/>
[Part 02]: <https://thinkcodeplay.com/full-stack-guide-wishlist-02-http-request-from-node/>
[Part 03]: <https://thinkcodeplay.com/how-to-use-mongodb-and-mongoose-in-node-js/>
[Part 04]: <https://thinkcodeplay.com/full-stack-guide-wishlist-04-node-js-tests/>
[Part 05]: <https://thinkcodeplay.com/full-stack-guide-wishlist-05-user-authentication/>
