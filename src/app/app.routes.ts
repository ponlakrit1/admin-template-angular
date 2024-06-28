import { Routes } from '@angular/router';
import { ChartComponent } from './features/example/chart/chart.component';
import { FormFieldComponent } from './features/example/form-field/form-field.component';
import { Sub1Component } from './features/example/sub-menu/sub1/sub1.component';
import { Sub2Component } from './features/example/sub-menu/sub2/sub2.component';
import { DataTableComponent } from './features/example/data-table/data-table.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './core/layouts/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/chart',
        pathMatch: 'full',
    },
    { 
        path: 'login', 
        component: LoginComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { 
                path: 'chart', 
                component: ChartComponent, 
            },
            { 
                path: 'form-field', 
                component: FormFieldComponent,
            },
            { 
                path: 'sub-menu', 
                children: [
                    { path: 'sub1', component: Sub1Component, },
                    { path: 'sub2', component: Sub2Component, },
                ],
            },
            { 
                path: 'data-table', 
                component: DataTableComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'chart'
    }
];
