import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { inject } from '@angular/core';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const rolesAllowed = route.data["roles"]
  const roleUser = authService.payload()?.role

  if(!roleUser) return false

  if (rolesAllowed.includes(roleUser)) {
      return true
    }

  return false
};
