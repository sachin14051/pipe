import { PipeTransform,Pipe } from "@angular/core";


@Pipe({
    name : "data"

})
export class DataPipe implements PipeTransform{

    transform(value: String , limit: number = 15) {
        return value.substr(0,limit)+ "..."
        console.log(value)
    }
 
}