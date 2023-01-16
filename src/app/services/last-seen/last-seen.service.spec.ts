import { TestBed } from '@angular/core/testing';

import { LastSeenService } from './last-seen.service';

describe('LastSeenService', () => {
  let service: LastSeenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastSeenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
