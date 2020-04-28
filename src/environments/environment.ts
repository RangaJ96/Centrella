// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    
    apiKey: "AIzaSyBgUjAYw679wOKxbEjC0wZ3G3JpCNpNst0",
    authDomain: "chattest-96ba0.firebaseapp.com",
    databaseURL: "https://chattest-96ba0.firebaseio.com",
    projectId: "chattest-96ba0",
    storageBucket: "",
    messagingSenderId: "762742814171",
    appId: "1:762742814171:web:3c6dea43c7b6721a"
  },
  

  iceservers: 'http://localhost:3000/getICETokens',
  wsserver: 'http://localhost:3000',
  firebase_cms_url: `https://firebasestorage.googleapis.com/v0/b/chattest-96ba0.appspot.com/o/`,
  firebase_cms_url_postfix: '?alt=media&token=0b59f3a1-e0ac-4229-868c-d8302031ceee',
  sentiment_api: 'http://localhost:3002'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
