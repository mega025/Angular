import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toogleNav: boolean = false

  toggleStatusNav(){
    this.toogleNav=!this.toogleNav;
  }
}
