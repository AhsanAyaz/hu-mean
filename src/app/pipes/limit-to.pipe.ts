import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, num: number): any {
    if (value.length >= num) {
      const newVal = value.substr(0, num);
      return `${newVal}...`;
    }
    return value;
  }

}
