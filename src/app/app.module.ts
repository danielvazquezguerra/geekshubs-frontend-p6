import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//#region Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
//#endregion

//#region AntDesign
import { AntDesignModule } from './antdesign.module';

//#endregion

//#region Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { OrdersAllComponent } from './components/orders-all/orders-all.component';
import { GenreRandomComponent } from './components/genre-random/genre-random.component';
import { UsersAllComponent } from './components/users-all/users-all.component';
//#endregion

//#region Container
import { HomeComponent } from './container/home/home.component';
import { ResultsComponent } from './container/results/results.component';
import { DetailsComponent } from './container/details/details.component';
import { AdminprofileComponent } from './container/adminprofile/adminprofile.component';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';
import { ProfileComponent } from './container/profile/profile.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
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
    UserDataComponent,
    UserOrdersComponent,
    UserFormComponent,
    OrdersAllComponent,
    GenreRandomComponent,
    UsersAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AntDesignModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],

  bootstrap: [AppComponent]
})
export class AppModule { }
