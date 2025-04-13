import { inject } from "@angular/core";
import { LayoutService } from "../services/layout.service";
import { Metadata } from "../types/metadata.type";
import { MatDialog } from "@angular/material/dialog";
import { UtilsService } from "../services/utils.service";

export abstract class BaseComponent {
    private readonly dialog = inject(MatDialog)
    layoutService = inject(LayoutService);
    utilsService = inject(UtilsService)

    pageSize = 20
    currentPage = 0

    filename = "exported-data"
    subject = "Exported Data"
    pathLogo = "logos/logo.png"

    abstract metadata: Metadata

    data: any[] = []

    abstract dataOriginal: any[]

    constructor(private readonly component: new (...args: any[]) => any, private readonly panelClass: string, private readonly fieldNameId: string) {
        this.layoutService.layout.set({ header: true, menu: true });
    }

    loadPage(page: number) {
        this.currentPage = page;
        this.data = this.dataOriginal.slice(page * this.pageSize, (page + 1) * this.pageSize);
    }

    openForm(data: any = null) {
        const reference = this.dialog.open(this.component, {
            data,
            disableClose: true,
            panelClass: this.panelClass,
        })

        reference.afterClosed().subscribe({
            next: (result) => {
                if (!result) return

                if (result[this.fieldNameId]) {
                    const index = this.dataOriginal.findIndex((item) => item[this.fieldNameId] === result[this.fieldNameId])
                    this.dataOriginal[index] = result
                    this.utilsService.showNotification("Item updated successfully")
                } else {
                    result[this.fieldNameId] = this.dataOriginal.length + 1
                    this.dataOriginal.push(result)
                    this.utilsService.showNotification("Item created successfully")
                }

                this.loadPage(this.currentPage)
            }
        })
    }

    remove(evt: any, row: any) {
        evt.stopPropagation()

        this.utilsService.confirm("Are you sure you want to delete this item?").subscribe({
            next: (result) => {
                if (!result) return

                const index = this.dataOriginal.findIndex((item) => item[this.fieldNameId] === row[this.fieldNameId])
                this.dataOriginal.splice(index, 1)
                this.loadPage(this.currentPage)
                this.utilsService.showNotification("Item deleted successfully")
            }
        })
    }

    showOptionsToExport() {
        this.utilsService.showOptionsToExport(this.dataOriginal, this.metadata, this.filename, this.subject, this.pathLogo)
    }

}