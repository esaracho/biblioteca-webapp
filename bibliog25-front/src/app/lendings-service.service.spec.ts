import { TestBed } from '@angular/core/testing';

import { LendingsServiceService } from './lendings-service.service';

describe('LendingsServiceService', () => {
  let service: LendingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
