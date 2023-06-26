import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private translate: TranslateService) {}


  public setLanguage(lang: string){
    if(this.translate.langs.includes(lang) &&  this.translate.currentLang != lang){
      this.translate.use(lang);
    }
  }

}
