import { effect, Inject, Injectable, signal } from "@angular/core";

export type Theme = {
    id: string;
    primary: string;
    displayName: string;
}

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly themes: Theme[] = [
        {
            id: "green",
            primary: "#2f6b1a",
            displayName: "Green"
        },
        {
            id: "orange",
            primary: "#934a1a",
            displayName: "Orange"
        },
        {
            id: "purple",
            primary: "#a1366b",
            displayName: "Purple"
        }
    ];

    currentTheme = signal<Theme>(this.themes[0]);

    updateThemeClass = effect(() => {
        const theme = this.currentTheme();
        document.body.classList.remove(...this.themes.map(t => t.id));
        document.body.classList.add(theme.id);
    });

    getThemes(): Theme[] {
        return [...this.themes];
    }

    setTheme(themeId: string) {
        const theme = this.themes.find(t => t.id === themeId);
        if (theme) {
            this.currentTheme.set(theme);
        }
    }
}