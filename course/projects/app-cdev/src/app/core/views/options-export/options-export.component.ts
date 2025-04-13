import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ExportService } from '../../services/export.service';
import { Info } from '../../services/info.type';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

export type Destination = "excel" | "pdf"
export type Option  = "see" | "download" | "print"

@Component({
  selector: 'cdev-options-export',
  imports: [MatListModule, MatIconModule],
  templateUrl: './options-export.component.html',
  styleUrl: './options-export.component.scss'
})
export class OptionsExportComponent {
  exportService = inject(ExportService)
  infoData = inject(MAT_BOTTOM_SHEET_DATA)

  constructor(private readonly reference: MatBottomSheetRef) {}

  exportTo(dest: Destination, option?: Option) {
    const info: Info = {
      filename: this.infoData.filename,
      subject: this.infoData.subject,
      records: this.infoData.data,
      metadata: this.infoData.metadata,
      pathLogo: this.infoData.pathLogo
    }

    if(dest==="excel") {
      this.exportService.exportToExcel(info)
    }

    if(dest==="pdf") {
      this.exportService.exportToPdf(info, option!)
    }

    this.reference.dismiss()


  }
}
