import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';

@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy: string, order: any): any[] {
 const sortOrder = order ? order:'desc'; 

  return orderBy(array, [sortBy], [sortOrder]);
  }
}
