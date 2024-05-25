import { Routes } from '@angular/router';
import { ChartComponent } from './pages/example/chart/chart.component';
import { FormFieldComponent } from './pages/example/form-field/form-field.component';
import { Sub1Component } from './pages/example/sub-menu/sub1/sub1.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/chart',
        pathMatch: 'full',
    },
    { path: 'chart', component: ChartComponent },
    { path: 'form-field', component: FormFieldComponent },
    { path: 'sub-menu', children: [
        { path: 'sub1', component: Sub1Component },
    ]},
    {
        path: '**',
        redirectTo: 'chart'
    }
];
