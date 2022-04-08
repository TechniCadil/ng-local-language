import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLocalSettingService {

  constructor() { }

  getBrowserLocales(options = {}) {
   const defaultOptions = {
     languageCodeOnly: false,
   };
 
   const opt = {
     ...defaultOptions,
     ...options,
   };
 
   const browserLocales =
     navigator.languages === undefined
       ? [navigator.language]
       : navigator.languages;
 
   if (!browserLocales) {
     return undefined;
   }
 
   return browserLocales.map(locale => {
     const trimmedLocale = locale.trim();
 
     return opt.languageCodeOnly
       ? trimmedLocale.split(/-|_/)[0]
       : trimmedLocale;
   });
 }
}
