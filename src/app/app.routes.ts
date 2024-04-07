import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'contador',
        pathMatch: 'full'
    },
    {
        path: 'contador',
        loadComponent: () => import('./main/components/contador/contador.component').then(m => m.ContadorComponent)
    },
    {
        path: 'api',
        loadComponent: () => import('./main/components/api/api.component').then(m => m.ApiComponent)
    }
];
