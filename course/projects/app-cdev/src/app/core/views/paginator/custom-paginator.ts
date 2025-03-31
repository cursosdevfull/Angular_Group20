import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
    override itemsPerPageLabel = 'Items por página:';
    override firstPageLabel = 'Primera página';
    override lastPageLabel = 'Última página';
    override nextPageLabel = 'Siguiente página';
    override previousPageLabel = 'Página anterior';

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        //return `${page * pageSize + 1} - ${Math.min((page + 1) * pageSize, length)} de ${length}`;
        const range = `${page * pageSize + 1} - ${Math.min((page + 1) * pageSize, length)}`
        const total = `${length}`

        return `${range} /// ${total}`;
    }
}