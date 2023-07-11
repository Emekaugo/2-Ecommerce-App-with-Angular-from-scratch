import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { zResolversResolver } from './z-resolvers.resolver';

describe('zResolversResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => zResolversResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
