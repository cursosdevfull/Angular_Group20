import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) 

  return authService.verifyUserLogged()
};
