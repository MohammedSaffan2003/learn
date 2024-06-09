import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


 const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'navbar', component: NavbarComponent, title: 'EduSphere' },
  // { path: 'courses', component: CourseListComponent },
  // { path: 'courses/:id', component: CourseDetailComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'admin', component: AdminDashboardComponent },
  { path:'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


