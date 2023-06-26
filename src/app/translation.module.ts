import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';;
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es', // Default lang
    })
  ],
  exports: [TranslateModule],
})
export class TranslationModule { 
  langs:string[] = ['es','en'];

  constructor(public translate: TranslateService) {
    translate.addLangs(this.langs); //  Init langs
  }
}
