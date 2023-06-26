import { Component } from '@angular/core';
import { MenuItemI } from './navbar.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Navbar items
  private menuItems: MenuItemI[] = [];
  
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.updateMenuItems();
    });
    this.updateMenuItems();
  }

  get navbarItems():MenuItemI[]{
    return [...this.menuItems];
  }

  public updateMenuItems():void {
    const translationKeys = ['navbar.items'];

    this.translate.get(translationKeys).subscribe((translations: any) => {
      const navbarItems = translations['navbar.items'];
      

      if (this.menuItems.length > 0) {
        // Change lang
        const numItems = Math.min(navbarItems.length, this.menuItems.length);
        
        for (let i = 0; i < numItems; i++) {
          this.menuItems[i].name = navbarItems[i].name;
        }
      } else {
        // First upload
        this.menuItems = navbarItems.map((item: any) => {
          return { name: item.name, url: item.url };
        });
      }
    });
  }
}
