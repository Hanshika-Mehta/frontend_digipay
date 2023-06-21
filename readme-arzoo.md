# DigiPay: Digital Wallet
An e-rupi voucher ecosystem.
A solution for corporate, government,users and merchants.

## Description

### What is E-Rupi? 
E-Rupi is a person and purpose-specific voucher. It can only be redeemed by the intended person for the intended purpose. The transaction takes place between a user's e-voucher and the merchant's bank.
It is an offline process. One must make a manual requests to the bank for issuance of E-Rupi Voucher. 

### Our Solution
Keeping the essence of e-rupi voucher alive we built an online digital wallet to provide extra features on top of the offline feature.
Tech stack:
Frontend = React.js
Backend= Node.js
Database= Mysql
API's= Twilio

## Table of Contents 
- [Folder Setup](#Folder)
- [Installation](#installation)
- [Usage](#usage)
- [](#)
- [](#)

## Folder Setup

### Backend
`src` -> Inside the src folder the actual code resides.

Lets take a look inside the `src` folder

`config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

`controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

`repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

`services` -> contains the buiness logic and interacts with repositories for data from the database

`utils` -> contains helper methods, error classes etc.

### Frontend 


## Installation
### Setting up backend 
Go inside the folder path and execute the following command:

`npm install`

In the root directory create a .env file and add the following env variables

PORT=<port number of your choice>

ex: `PORT=3000`

go inside the `src` folder and execute the following command: `npx sequelize init`

By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute : `npm run dev`

### Setting up frontend 

## Usage


## Features
### User
- Request Vouchers
- Extend Expiry of a voucher
- Pay to Merchant
- Review Expenditure Analysis
- Review Yojana's related to the user
- Transation History

### Merchant
- Accept Payment
- Review Customer Analysis : See what yojana related vouchers are being redeemed
- Transaction History

### Government
- Create Voucher
- Distribute Voucher
- Analysis : Distribution analysis, Vouchers being expired without being redeemd analysis
- Vouchers redeemed transaction
- Users voucher tracking

### Corporate 
- Create Voucher
- Distribute Voucher
- Analysis : Distribution analysis, Vouchers being expired without being redeemd analysis
- Employee Transaction History


