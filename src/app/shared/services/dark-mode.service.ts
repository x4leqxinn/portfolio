import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      localStorage.setItem('darkMode', 'true');
      this.setMode('light-mode','dark-mode');
    } else {
      localStorage.removeItem('darkMode');
      this.setMode('dark-mode','light-mode');
    }
  }

  setMode(from: string, to: string){
    document.body.classList.remove(from);
    document.body.classList.add(to);
  }

}
