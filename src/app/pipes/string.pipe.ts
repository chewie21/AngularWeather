import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform{
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
