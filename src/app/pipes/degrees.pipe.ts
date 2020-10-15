import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {
  transform(value: string): number {
    return Math.round(+value);
  }
}
