import { Injectable } from "@angular/core";

export type MenuItem = {
    title: string;
    icon: string;
    route: string;
    children?: MenuItem[];
}

@Injectable({ providedIn: "root" })
export class MenuService {
    readonly items: MenuItem[] = [
        { title: "Dashboard", icon: "dashboard", route: "/dashboard" },
        { title: "Users", icon: "people", route: "/user" },
        { title: "Courses", icon: "school", route: "/course" },
        { title: "Schedules", icon: "schedule", route: "/schedule" },
        {
            title: "Students", icon: "people", route: "/students", children: [
                { title: "Assessments", icon: "assessment", route: "/students/assessments" },
                { title: "Payments", icon: "payments", route: "/students/payments" },
                { title: "Attendance", icon: "event_note", route: "/students/attendance" }
            ]
        }
    ]
}