# node-face-detection-app-backend

## Overview

Full-stack React app with Node.js Server on the backend, postgres database with React
Hooks to manage our state (replacing Redux!), with vision AI using Clarifai Api and more.

This application is the backend for a face detection app where users can upload images and detect faces in those
images. The frontend for the app is [react-face-detection-app-frontend](https://github.com/heminjohnson/react-face-detection-app-frontend)

## Installation

Clone this repository and run

```javascript
npm install
```

To start server

```javascript
npm start
```

## ENVIRONMENT VARIABLES

Keys and other sensitive details are not stored on Github. Before starting the app create a `.env` file and add the API KEY:

`DB_HOST=[YOUR_DATABASE_HOST_LINK]`<br/>
`DB_USER=[YOUR_DATABASE_USERNAME]`<br/>
`DB_PASSWORD=[YOUR_DATABASE_PASSWORD]`<br/>
`DB_NAME=[NAME_OF_YOUR_DATABASE]`
