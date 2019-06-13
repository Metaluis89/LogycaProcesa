import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule } from './Material.Module';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActivarComponent } from './components/pages/activar/activar.component';
import { RespuestaInterceptor } from './services/respuesta.interceptor';
import { SolicitudInterceptor } from './services/solicitud.interceptor';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    ActivarComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RespuestaInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SolicitudInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
