/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermitsRequestsService } from './permitsRequests.service';

describe('Service: PermitsRequests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermitsRequestsService]
    });
  });

  it('should ...', inject([PermitsRequestsService], (service: PermitsRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
