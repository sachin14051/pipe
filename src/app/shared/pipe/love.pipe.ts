import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'love'
}) 
export class LovePipe implements PipeTransform {
    transform(value: any) {
     return "i love" + " " + value
    }

}