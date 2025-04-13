import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../auth/services/auth.service";

export type MenuItem = {
    title: string;
    icon: string;
    route: string;
    children?: MenuItem[];
}

@Injectable({ providedIn: "root" })
export class MenuService {
    authService = inject(AuthService)

    readonly items: MenuItem[] = [
        { title: "Dashboard", icon: "dashboard", route: "/dashboard" },
        { title: "Users", icon: "people", route: "/users" },
        { title: "Courses", icon: "school", route: "/courses" },
        { title: "Schedules", icon: "schedule", route: "/schedules" },
        {
            title: "Students", icon: "people", route: "/students", children: [
                { title: "Assessments", icon: "assessment", route: "/students/assessments" },
                { title: "Payments", icon: "payments", route: "/students/payments" },
                { title: "Attendance", icon: "event_note", route: "/students/attendance" }
            ]
        }
    ]

/*     getAllMenuItems(): MenuItem[] {
        const roles = this.authService.payload()?.roles || [];
    } */

    getMenuItem(path: string): MenuItem | undefined {
        // First, check if it's a top-level item
        const topLevelItem = this.items.find(item => item.route === path);
        if (topLevelItem) {
            return topLevelItem;
        }

        // If not found at top level, search in children
        for (const parentItem of this.items) {
            if (parentItem.children) {
                const childItem = parentItem.children.find(child => child.route === path);
                if (childItem) {
                    return childItem;
                }
            }
        }

        return undefined;
    }
}