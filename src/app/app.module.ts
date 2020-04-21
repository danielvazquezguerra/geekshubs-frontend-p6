import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//#region Material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


//#endregion

//#region Components

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//#endregion

//#region Container

import { HomeComponent } from './container/home/home.component';
import { ResultsComponent } from './container/results/results.component';
import { DetailsComponent } from './container/details/details.component';
import { AdminprofileComponent } from './container/adminprofile/adminprofile.component';


import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';
import { ProfileComponent } from './container/profile/profile.component';
import { MoviesComponent } from './container/movies/movies.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFormComponent } from './components/user-form/user-form.component';

//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResultsComponent,
    DetailsComponent,
    AdminprofileComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MoviesComponent,
    UserDataComponent,
    UserOrdersComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
