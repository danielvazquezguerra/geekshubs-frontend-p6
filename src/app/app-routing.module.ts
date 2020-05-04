import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './container/home/home.component';
import { ResultsComponent } from './container/results/results.component';
import { DetailsComponent } from './container/details/details.component';
import { AdminprofileComponent } from './container/adminprofile/adminprofile.component';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';
// import { ProfileComponent } from './container/profile/profile.component';
import { UsersAllComponent } from './components/users-all/users-all.component';
import { OrdersAllComponent } from './components/orders-all/orders-all.component';
import { MoviesAllComponent } from './components/movies-all/movies-all.component';
import { AdminSearchComponent } from './components/admin-search/admin-search.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ProfileComponent } from './container/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: ResultsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/data', component: UserDataComponent },
  { path: 'profile/update', component: UserFormComponent },
  { path: 'profile/order', component: UserOrdersComponent },
  { path: 'admin', component: AdminprofileComponent },
  { path: 'admin/users', component: UsersAllComponent },
  { path: 'admin/orders', component: OrdersAllComponent },
  { path: 'admin/movies', component: MoviesAllComponent },
  { path: 'admin/movieAdd', component: CreateMovieComponent },
  { path: 'admin/movieUpdate', component: MovieUpdateComponent },
  { path: 'admin/search', component: AdminSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
