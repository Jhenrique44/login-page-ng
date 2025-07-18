import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { User } from './pages/user/user';
import { AuthGuard } from './services/auth-guard';
export const routes: Routes = [
    { 
        path:"login",
        component: Login,
    },
    { 
        path:"signup",
        component: Register,
    },
    {
        path: "user",
        component: User,
        canActivate: [AuthGuard]

    }
];
