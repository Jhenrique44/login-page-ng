import { Component } from '@angular/core';
import { DefaultLayout } from '../../components/default-layout/default-layout';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DefaultInputForm } from '../../components/default-input-form/default-input-form';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm { 
  email: FormControl;
  password: FormControl;
}
@Component({
  selector: 'app-login',
  imports: [DefaultLayout, ReactiveFormsModule, DefaultInputForm],
  providers: [LoginService],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup<LoginForm>;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => this.toastService.success('Login successful'),
        error: () => this.toastService.error('Login failed, please try again!'),
      });
  }
  navigate() {
    this.router.navigate(['/signup']);
  }
}
