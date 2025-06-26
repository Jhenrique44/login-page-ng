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

interface SignupForm { 
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
}
@Component({
  selector: 'app-login',
  imports: [DefaultLayout, ReactiveFormsModule, DefaultInputForm],
  providers: [LoginService],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  signupForm!: FormGroup<SignupForm>;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    this.loginService
      .login(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe({
        next: () => this.toastService.success('Login successful'),
        error: () => this.toastService.error('Login failed, please try again!'),
      });
  }
  navigate() {
    this.router.navigate(['/login']);
  }
}
