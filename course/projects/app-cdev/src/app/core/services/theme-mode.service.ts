import { computed, effect, Injectable, signal } from "@angular/core";

export type ThemeMode = {
    name: 'light' | 'dark' | 'system';
    icon: string
}

@Injectable({
    providedIn: 'root'
})
export class ThemeModeService { 
    private readonly themeModes: ThemeMode[] = [
        {
            name: 'light',
            icon: 'light_mode'
        },
        {
            name: 'dark',
            icon: 'dark_mode'
        },
        {
            name: 'system',
            icon: 'desktop_windows'
        }
    ];

    appTheme = signal<ThemeMode>(this.themeModes[2]);

    getThemeModes(): ThemeMode[] {
        return [...this.themeModes];
    }

    setThemeMode(themeMode: ThemeMode) {
        this.appTheme.set(themeMode);
    }

    updateThemMode = effect(() => {
        const appTheme = this.appTheme();
        const colorThemeMode = appTheme.name === "system" ? "light dark" : appTheme.name
        document.body.style.setProperty("color-scheme", colorThemeMode);
    })

    selectedThemeMode = computed(() => this.themeModes.find(t => t.name === this.appTheme().name))
}