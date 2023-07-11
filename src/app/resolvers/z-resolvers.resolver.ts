import { ResolveFn } from '@angular/router';

export const zResolversResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
