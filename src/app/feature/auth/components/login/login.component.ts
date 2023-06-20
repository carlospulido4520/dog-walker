import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formLogin: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user.user));
      this.loading = false;
      this.router.navigate(['home']);
      this.formLogin.reset();
    });
  }
}
