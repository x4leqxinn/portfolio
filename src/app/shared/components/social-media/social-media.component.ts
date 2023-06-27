import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  constructor(private renderer: Renderer2) { }

  toggleOpen() {
    const closeBtn = document.querySelector(".close-btn");
    closeBtn!.classList.toggle("open");
  }

}
