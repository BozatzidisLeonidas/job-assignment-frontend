import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByOrderNumber'
})
export class SortByOrderPipe implements PipeTransform {

    
    transform(value: any[], ...args: any[]): any[] { 
        //value in this case is the array of landmarks. Oysiastika soy leei tha laveis ena array, oti allo args thes, tha gyriseis ena array.
        if (!value) return [];
        return value.sort((a, b) => a.order - b.order);
    }

}