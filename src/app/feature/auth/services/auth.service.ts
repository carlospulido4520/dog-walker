import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any;

  constructor(public afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  async logout() {
    await this.afAuth.signOut();
  }
}
