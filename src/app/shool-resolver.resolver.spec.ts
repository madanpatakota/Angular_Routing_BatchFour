import { TestBed } from '@angular/core/testing';

import { ShoolResolverResolver } from './shool-resolver.resolver';

describe('ShoolResolverResolver', () => {
  let resolver: ShoolResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ShoolResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
