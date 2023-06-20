import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/feature/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showUser: boolean = false;
  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      this.showUser = user ? true : false;
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.authService.logout();
  }
}
