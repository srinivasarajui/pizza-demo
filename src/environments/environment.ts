// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: `AIzaSyD1IZmlAtRtiZgb8yhUI9XQkd_8Zj2g6f0`,
    authDomain: `pizza-demo-3c6ed.firebaseapp.com`,
    databaseURL: `https://pizza-demo-3c6ed.firebaseio.com`,
    projectId: `pizza-demo-3c6ed`,
    storageBucket: `pizza-demo-3c6ed.appspot.com`,
    messagingSenderId: `835512203864`
  }
};
