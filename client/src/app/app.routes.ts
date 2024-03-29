import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component') },
    { path: 'login', loadComponent: () => import('./pages/login/login.component') },
    { path: 'register', loadComponent: () => import('./pages/register/register.component') },
    { path: 'forget-password', loadComponent: () => import('./pages/forget-password/forget-password.component') },
    { path: 'reset/:token', loadComponent: () => import('./pages/reset-password/reset-password.component') },
    { path: 'table', loadComponent: () => import('./pages/table/table.component') },
    { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component') },
];
