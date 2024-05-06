import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { InfoComponent } from './pages/info/info.component';
import { Sub1Component } from './pages/test/sub1/sub1.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent },
    { path: 'management', component: ManagementComponent },
    { path: 'info', component: InfoComponent },
    { path: 'test', children: [
        { path: 'sub1', component: Sub1Component },
    ]},
    {
        path: '**',
        redirectTo: 'home'
    }
];
