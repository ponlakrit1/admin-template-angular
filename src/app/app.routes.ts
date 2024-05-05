import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent},
    { path: 'management', component: ManagementComponent},
    { path: 'info', component: InfoComponent},
    {
        path: '**',
        redirectTo: 'home'
    }
];
