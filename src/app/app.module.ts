import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//#region Glidejs
import { NgxGlideModule } from 'ngx-glide';
//#endregion

import { CarouselModule } from 'ngx-owl-carousel-o';

//#region Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AntDesignModule } from './antdesign.module';
import { MatCardModule } from '@angular/material/card';
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

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MoviesGenreComponent } from './slidemovies/movies-genre/movies-genre.component';
import { MoviesAllComponent } from './components/movies-all/movies-all.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';
import { AdminSearchComponent } from './components/admin-search/admin-search.component';
import { SliderComponent } from './components/slider/slider.component';

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
    MoviesGenreComponent,
    MoviesAllComponent,
    CreateMovieComponent,
    MovieUpdateComponent,
    AdminSearchComponent,
    SliderComponent,
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
    NgxGlideModule,
    CarouselModule,
    MatCardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],

  bootstrap: [AppComponent]
})
export class AppModule { }
