import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  ver:boolean = false;
  ver2:boolean = false;

  toggleVer(){
    this.ver = !this.ver;
  }


  toggleVer2(){
    this.ver2 = !this.ver2;
  }
}
