import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeartComponent } from './components/welcomeart/welcomeart.component';
import { SkilsComponent } from './components/skils/skils.component';
import { StudiesComponent } from './components/studies/studies.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullpagealertComponent } from './components/fullpagealert/fullpagealert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    WelcomeartComponent,
    SkilsComponent,
    StudiesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    LandingpageComponent,
    ProyectsComponent,
    FullpagealertComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
