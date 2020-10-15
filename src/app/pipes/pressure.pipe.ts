import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {
  transform(value: string): number {
    return Math.round(+value * 0.750062);
  }
}
