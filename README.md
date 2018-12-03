# Emaily

Emaily is a web app for creating, sending and tracking email surveys. Emaily is the product of Stephen Grider's Full Stack React course: https://github.com/StephenGrider/FullstackReactCode

# Dev Cheat Sheet

# Getting started

First checkout this repo, then install and run the dependencies with the following commands:

```
$ git clone git@github.com:oliverpople/emaily.git
$ cd emaily
$ npm i
$ cd emaily/client
$ npm i
```

To run Express server and React app concurrent use the following commands:

```
$ cd emaily
$ npm run dev
```

To run Express server independently use the following commands in a new tab:

```
$ cd emaily
$ npm run server
```

To run client side react app independently the following commands in a separate tab:

```
$ cd emaily/client
$ npm start
```

once the app successfully compiled it should automatically open in your default browser. If not, visit: **http://localhost:3000**

## Dependencies

[mLab](https://docs.mlab.com/)  
[stripe](https://stripe.com/docs/api)  
[Google Oauth](https://developers.google.com/api-client-library/javascript/features/authentication)  
[sendgrid](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/)  

## TODO:

- Improve UI styling.
- Allow users to delete surveys that have been created.
- Allow users to specify the 'from' field on survey emails.
- Allow client side sorting of Surveys.
