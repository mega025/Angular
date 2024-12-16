import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/auth/login.service';
import {PopupService} from '../services/utils/popup.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {

  constructor(
    private popUpService: PopupService,
    private loginService: LoginService,
    private router: Router,
  ) {
  }
  logout () {
    this.popUpService.loading("Cerrando sesión", "Por favor espere...")
    setTimeout(() => {
      this.loginService.deleteUser()
      this.popUpService.close()
      this.router.navigate(['/login'])
    }, 2000)
  }
}
