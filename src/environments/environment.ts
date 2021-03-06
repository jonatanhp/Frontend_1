// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const URLS = {
  vit_mac: 'http://open-settings-api.devotion/api/',
  urlhome: 'http://127.0.0.1:8000/api/'
}

const OpenClientCredentials = {
  shell_app_url: 'http://localhost:4200',
  client_id: '',
  client_secret: '',
  redirect_uri: '',
  client_code: '01010000',
}

export const environment = {
  production: false,
  //apiEsUrl: URLS.vit_mac,
  apiEsUrl: URLS.urlhome,
  openClientCredentials: OpenClientCredentials,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
