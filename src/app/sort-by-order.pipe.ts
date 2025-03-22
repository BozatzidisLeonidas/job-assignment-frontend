import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByOrderNumber'
})
export class SortByOrderPipe implements PipeTransform {

    transform(value: any[], ...args: any[]): any[] {
        if (!value) return [];
        return value.sort((a, b) => a.order - b.order);
    }

}