import { TestBed } from '@angular/core/testing';

import { KNDataService } from './kn-data.service';

describe('KNDataService', () => {
  let service: KNDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KNDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
