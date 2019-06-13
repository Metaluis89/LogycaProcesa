import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { ActivarComponent } from './components/pages/activar/activar.component';


const AP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    {path: '', component: PagesComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'activar', component: ActivarComponent },
    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

export const APP_ROUTING = RouterModule.forRoot(AP_ROUTES);
