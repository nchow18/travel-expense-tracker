![Badge](https://img.shields.io/badge/--COOL-yellow.svg)

# Travel-Transactions

* [Link to GitHub](https://github.com/nchow18)
* [Email](mailto:emailme@nathanchow.ca)
* [Link to HEROKU](https://travel-expense-2021.herokuapp.com)

## Summary

This is an app with the use of indexedDB and service workers, to help increase app functionality with or without internet on your mobile device.

## Table of Contents

- [Installation](#installation)
- [Adding Transaction](#adding-transaction)
- [Offline Use](#offline-use)


## Installation

To begin, in your `cmd` line, enter the following into your desired local machine folder:

```git clone git@github.com:nchow18/travel-expense-tracker.git```

After git files have been cloned to your folder, in `cmd` line enter the following to install all required dependencies:

`npm i`

Once installed, you will require Mongoose:

`npm install mongoose`

To start your server, in your `cmd` line:

`npm start`

Visit Insomnia Core to begin `GET, POST' requests with `http://localhost:3001/` or at https://travel-expense-2021.herokuapp.com/


## Adding Transaction

To add a transaction, enter the transaction name and Transaction Amount, and you can either choose to add or remove funds from the transaction.  This will update your total

![Travel Transaction](https://raw.githubusercontent.com/nchow18/travel-expense-tracker/main/public/assets/images/img.png)


## Offline Use

This app allows you to use all its features even if its not connected to internet.  The data will be stored in indexedDB, and once connection establishes again, your stored data will be posted to the database and will be updated.