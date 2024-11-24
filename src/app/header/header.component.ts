import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(
        private router: Router,
    ) {
    }
  ver:boolean = false;
  ver2:boolean = false;

  toggleVer(){
    this.ver = !this.ver;
  }


  toggleVer2(){
    this.ver2 = !this.ver2;
  }
  Inicio(){
    this.router.navigate(['Inicio']);
  }
  Personal(){
    this.router.navigate(['Personal']);
  }
  Familia(){
    this.router.navigate(['Familia']);
  }
  Deporte(){
    this.router.navigate(['Deporte']);
  }
  Citas(){
    this.router.navigate(['Citas']);
  }
  Cerrar(){
    this.router.navigate([""]);
  }
}
