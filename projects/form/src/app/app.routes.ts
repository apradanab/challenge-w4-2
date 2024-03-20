import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personal',
  title: 'personal',
  loadComponent: () => import('./compt/personal/personal.component')
},
{
  path: 'access',
  title: 'access',
  loadComponent: () => import('./compt/access/access.component') },
{ path: '', pathMatch: 'full', redirectTo: 'personal' },
{ path: '**', redirectTo: 'personal' },
];
