import { Routes } from '@angular/router';
import { PageAuthComponent } from './auth/views/page-auth/page-auth.component';

export const routes: Routes = [
/*     { path: "", redirectTo: "login", pathMatch: "full" },
 */    { path: "login", component: PageAuthComponent },
    { path: "course", loadComponent: () => import("./course/views/page-course/page-course.component").then(m => m.PageCourseComponent) },
    { path: "dashboard", loadComponent: () => import("./dashboard/views/page-dashboard/page-dashboard.component").then(m => m.PageDashboardComponent) },
    { path: "schedule", loadComponent: () => import("./schedule/views/page-schedule/page-schedule.component").then(m => m.PageScheduleComponent) },
    { path: "user", loadComponent: () => import("./user/views/page-user/page-user.component").then(m => m.PageUserComponent) },
    { path: "**", redirectTo: "login" },
];
