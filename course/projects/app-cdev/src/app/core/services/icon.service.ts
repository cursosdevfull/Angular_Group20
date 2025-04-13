import { inject, Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

type Icon = {
    name: string;
    icon: string;
}

type Icons = Icon[]

@Injectable({
    providedIn: "root"
})
export class IconService {
    private icons: Icons = [
        {
            name: "ico-excel",
            icon: "/icons/icon-excel.svg"
        },
        {
            name: "ico-pdf",
            icon: "/icons/icon-pdf.svg"
        }
    ]

    constructor() {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);

        for (const icon of this.icons) {
            iconRegistry.addSvgIcon(
                icon.name,
                sanitizer.bypassSecurityTrustResourceUrl(icon.icon)
            );
        }
    }
}