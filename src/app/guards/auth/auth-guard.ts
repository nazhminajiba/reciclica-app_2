import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from 'src/store/AppState';
import { login } from 'src/store/login/login.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad(): Observable<boolean> {
    return this.store.select("login").pipe(
      take(1),
      switchMap(loginState => {
        if (loginState.isLoggedIn) {
          return of(true);
        }
        this.router.navigateByUrl("login");
        return of(false);
      })
    )
  }
}


