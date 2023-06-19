import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any;
  subscription!: Subscription;

  constructor(public afAuth: AngularFireAuth) {
    this.subscription = this.afAuth.authState.subscribe((user) => {
      console.log(user)
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }
}
