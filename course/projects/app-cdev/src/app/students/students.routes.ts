import { Routes } from "@angular/router";
import { ListStudentsComponent } from "./views/list-students/list-students.component";
import { PaymentsComponent } from './views/payments/payments.component';

export const studentRoutes: Routes = [
    //{ path: "", loadComponent: () => import("./views/list-students/list-students.component").then(m => m.ListStudentsComponent) },
    {
        path: "", component: ListStudentsComponent, children: [
            { path: "payments", component: PaymentsComponent },
            { path: "attendance", loadComponent: () => import("./views/attendance/attendance.component").then(m => m.AttendanceComponent) },
            { path: "assessments", loadComponent: () => import("./views/assessments/assessments.component").then(m => m.AssessmentsComponent) },
        ]
    },
    //{ path: "**", redirectTo: "" }
]