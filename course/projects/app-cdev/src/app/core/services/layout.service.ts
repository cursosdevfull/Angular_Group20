import { Injectable, signal } from "@angular/core";
import { Layout } from "./layout.type";

@Injectable({ providedIn: 'root' })
export class LayoutService {
    layout = signal<Layout>({ header: false, menu: false })
}