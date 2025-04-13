import { Injectable } from "@angular/core";
import * as XLSX from "xlsx";
import { Info } from "./info.type";
import { Metadata } from "../types/metadata.type";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ContextPageSize } from "pdfmake/interfaces";

pdfMake.vfs = (pdfFonts as any).pdfMake.vfs;

@Injectable({
    providedIn: "root"
})
export class ExportService {
    exportToExcel(info: Info) {
        const dataToExport = this.transformDataWithMetadata(info.records, info.metadata);
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        XLSX.utils.book_append_sheet(workbook, worksheet, info.subject);
        const filename = `${info.filename}.xlsx`;
        XLSX.writeFile(workbook, filename);
    }

    async exportToPdf(info:Info, option: "see" | "download" | "print") {
        const dataToExport = this.transformDataWithMetadata(info.records, info.metadata);

        let image;
        if(info.pathLogo) {
            image = await this.transformFileToDataUrl(info.pathLogo)
        }

        const infoFormat = {
            pageSize: "A4",
            pageOrientation: "portrait",
            pageMargins: [20, 20, 20, 20],
            content: [this.generateHeader(info.subject, image), this.generateContent(dataToExport)],
            footer: this.generateFooter,
            styles: this.generateStyles(),
        }

        this.generatePdf(infoFormat, info.filename, option)
    }

    private generateContent(data: any[]) {
        let body = []

        const rowHeader = Object.keys(data[0]).map(prop => [
            {
                text: prop,
                border: [false, false, true, false],
                style: "header",
                borderWidth: 0
            }
        ])

        const numberOfColumns = rowHeader.length
        const widths = Array.from(Array(numberOfColumns).keys()).map(() => `${Math.floor(100 / numberOfColumns)}%`)	

        body.push(rowHeader)

        const rows: any = data.map(el => Object.keys(el).map(prop => this.generateRow(el[prop], "item", false)))

        body = [...body, ...rows]

        return {
            margin: [0, 0, 0, 0],
            table: {
                widths,
                body
            }
        }
    }

    private generateFooter(currentPage: number, pageCount: number, pageSize: ContextPageSize) {
        return [
            {
                text: `Page ${currentPage} of ${pageCount}`,
                alignment: "center",
            }
        ]
    }

    private generatePdf(infoFormat:any, filename: string, option: string)  {
        const document = pdfMake.createPdf(infoFormat);
        if (option === "see") {
            document.open();
        } else if (option === "download") {
            document.download(filename);
        } else if (option === "print") {
            document.print();
        }
    }

    private generateStyles() {
        return {
            headerLeft: {
                fontFamily: "Verdana",
                fontSize: 10,
                margin: [0, 0, 0, 3],
                alignment: "left",
                color: "#000",
                bold: true
            },
            subHeaderLeft: {
                fontFamily: "Verdana",
                fontSize: 8,
                margin: [0, 0, 0, 3],
                alignment: "left",
                color: "#000",
            },
            titleReport: {
                fontFamily: "Verdana",
                fontSize: 20,
                margin: [0, 0, 0, 3],
                alignment: "center",
                color: "#000",
                bold: true
            },
            header: {
                fontFamily: "Verdana",
                fontSize: 10,
                height: 14,
                color: "#3c3b40",
                bold: true,
            },
            item: {
                fontFamily: "Verdana",
                fontSize: 10,
                margin: [0, 0, 0, 3],
                alignment: "left",
                color: "#000",
                bold: false
            },
        }
    }

    private generateHeader(title: string, image?: string) {
        return {
            margin: [0, 0, 0, 15],
            table: {
                widths: [120, 'auto', 100, 'auto'],
                body: [
                    [
                        {
                            image,
                            width: 100,
                            border: [false, false, true, false],
                            borderColor: "#000",
                            borderWidth: 1
                        }, 
                        {
                            text: [
                                this.generateRow("CursosDev", "headerLeft"),
                                this.generateRow("Av. Paulista 1000", "subHeaderLeft"),
                                this.generateRow("Las Azucenas, Lima, Perú", "subHeaderLeft"),
                                this.generateRow("Phone: +51 999 999 999", "subHeaderLeft"),
                                this.generateRow("Email: info@cursos-dev.com", "subHeaderLeft"),
                                this.generateRow("Web: www.cursos-dev.com", "subHeaderLeft"),
                            ],
                            border: [false, false, false, false],
                        }, 
                        {
                            text: "",
                            border: [false, false, false, false],
                        }, 
                        {
                            text: `Report ${title}`,
                            border: true,
                            style: "titleReport"
                        }
                    ]
                ]
            }
        }
    }

    private generateRow(text: string, style: string, withoutReturnCarriage: boolean = true) {
        return {
            text: withoutReturnCarriage ? `${text}\n` : text,
            style,
        }
    }

    private async transformFileToDataUrl(filePath: string): Promise<string> {
        const response = await fetch(filePath);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(blob);
            fileReader.onerror = (error) => reject(error);
            fileReader.onloadend = () => resolve(fileReader.result as string);
        })

    }

    private transformDataWithMetadata(data: any[], metadata: Metadata) {
        return data.map(item => {
            const row: any = {}
            for (const prop in item) {
                const md = metadata.find(m => m.field === prop)
                if (md) {
                    row[md.label] = item[prop]
                }
            }

            return row
        })
    }
}