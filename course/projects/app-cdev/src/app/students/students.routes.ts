import { Routes } from "@angular/router";

export const studentRoutes: Routes = [
    { path: "", loadComponent: () => import("./views/list-students/list-students.component").then(m => m.ListStudentsComponent) },
    { path: "payments", loadComponent: () => import("./views/payments/payments.component").then(m => m.PaymentsComponent) },
    { path: "attendance", loadComponent: () => import("./views/attendance/attendance.component").then(m => m.AttendanceComponent) },
    { path: "assessments", loadComponent: () => import("./views/assessments/assessments.component").then(m => m.AssessmentsComponent) },
    { path: "**", redirectTo: "" }
]