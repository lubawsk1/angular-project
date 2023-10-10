import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy2'
})
export class OrderBy2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
