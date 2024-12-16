import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../auth/login.service';

export const isLoogedGuard: CanActivateFn = (route, state) => {

  const loginServices = inject(LoginService);
  const router = inject(Router);

  if (loginServices.getUser())
    return true;
  else{
    router.navigate(['/login']);
    return false;
  }

};
