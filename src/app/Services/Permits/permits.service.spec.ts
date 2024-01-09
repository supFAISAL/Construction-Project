/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermitsService } from './permits.service';

describe('Service: Permits', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermitsService]
    });
  });

  it('should ...', inject([PermitsService], (service: PermitsService) => {
    expect(service).toBeTruthy();
  }));
});
