import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zPipes'
})
export class ZPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
