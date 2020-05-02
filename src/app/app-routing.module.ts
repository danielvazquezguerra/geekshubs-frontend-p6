import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './container/home/home.component';
import { ResultsComponent } from './container/results/results.component';
import { DetailsComponent } from './container/details/details.component';
import { AdminprofileComponent } from './container/adminprofile/adminprofile.component';
import { RegisterComponent } from './container/register/register.component';
import { LoginComponent } from './container/login/login.component';
import { ProfileComponent } from './container/profile/profile.component';
import { UsersAllComponent } from './components/users-all/users-all.component';
import { OrdersAllComponent } from './components/orders-all/orders-all.component';
import { MoviesAllComponent } from './components/movies-all/movies-all.component';
import { AdminSearchComponent } from './components/admin-search/admin-search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: ResultsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminprofileComponent },
  { path: 'admin/users', component: UsersAllComponent },
  { path: 'admin/orders', component: OrdersAllComponent },
  { path: 'admin/movies', component: MoviesAllComponent },
  { path: 'admin/search', component: AdminSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
