import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./website/layoutPage/layoutPage.component'),
        children: [
            {
                path: 'login',
                title: 'Login',
                loadComponent: () => import('./website/pages/login/login.component'),
            },
            {
                path: 'register',
                title: 'Register',
                loadComponent: () => import('./website/pages/register/register.component'),
            }
        ]
    }
];
