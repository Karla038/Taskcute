import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/Auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {


const router: Router = inject(Router);

// Check the authentication status
return inject(AuthService).checharAutenticacion().pipe(
    switchMap((authenticated) => {
        // If the user is not authenticated...
        if (!authenticated) {
            console.log('Usuario no autenticado');

            // Construct the redirect URL
            const redirectURL = state.url === '/users/sign-out' ? '' : `redirectURL=${state.url}`;
            const urlTree = router.parseUrl(`/users/login?${redirectURL}`);

            console.log('Redirigiendo a:', urlTree.toString());
            return of(urlTree);
        }

        // If authenticated, allow access
        return of(true);
    })
);

};
