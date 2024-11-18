import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ver:boolean = false;

  toggleVer(){
    this.ver = !this.ver;
  }
}
