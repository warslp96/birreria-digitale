import { TestBed } from '@angular/core/testing';

import { Birra } from './birra';

describe('Birra', () => {
  let service: Birra;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Birra);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
