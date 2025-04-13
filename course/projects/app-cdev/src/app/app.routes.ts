import { Routes } from '@angular/router';
import { PageAuthComponent } from './auth/views/page-auth/page-auth.component';
import { authenticationGuard } from './core/guards/authentication.guard';
import { authorizationGuard } from './core/guards/authorization.guard';

export const routes: Routes = [
/*     { path: "", redirectTo: "login", pathMatch: "full" },
 */    { path: "login", component: PageAuthComponent },
    { path: "courses", data: {roles: ["admin", "user"]}, canActivate: [authenticationGuard, authorizationGuard], loadComponent: () => import("./course/views/page-course/page-course.component").then(m => m.PageCourseComponent) },
    { path: "dashboard", data: { roles: ["admin", "user"] }, canActivate: [authenticationGuard, authorizationGuard], loadComponent: () => import("./dashboard/views/page-dashboard/page-dashboard.component").then(m => m.PageDashboardComponent) },
    { path: "schedules", data: { roles: ["admin"] }, canActivate: [authenticationGuard, authorizationGuard], loadComponent: () => import("./schedule/views/page-schedule/page-schedule.component").then(m => m.PageScheduleComponent) },
    { path: "users", data: { roles: ["admin", "user"] }, canActivate: [authenticationGuard, authorizationGuard], loadComponent: () => import("./user/views/page-user/page-user.component").then(m => m.PageUserComponent) },
    { path: "students", data: { roles: ["admin"] }, canActivate: [authenticationGuard, authorizationGuard], loadChildren: () => import("./students/students.routes").then(m => m.studentRoutes) },
    { path: "**", redirectTo: "login" },
];

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obi5kb2VAZW1haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ0NTgwMzUyLCJleHAiOjE3NDQ2MTYzNTJ9.CRyiGNswJd50mDTCoSkgC94da5Mlml_SRPYvz1w1EdY