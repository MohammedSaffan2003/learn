import { Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

export const COURSES_ROUTES: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CourseDetailComponent }
];
