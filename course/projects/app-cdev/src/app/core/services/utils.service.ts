import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmComponent } from "../views/confirm/confirm.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { OptionsExportComponent } from "../views/options-export/options-export.component";

@Injectable({ providedIn: "root" })
export class UtilsService {
    dialog = inject(MatDialog)
    notification = inject(MatSnackBar)
    options = inject(MatBottomSheet)

    confirm(message?: string) {
        const reference = this.dialog.open(ConfirmComponent, {
            disableClose: true,
        })

        if (message) reference.componentInstance.message = message

        return reference.afterClosed()
    }

    showNotification(message: string) {
        this.notification.open(message, "", { duration: 1500 })
    }

    showOptionsToExport() {
        this.options.open(OptionsExportComponent)
    }
}