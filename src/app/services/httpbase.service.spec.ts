/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpBaseService } from './httpbase.service';

describe('Service: Httpbase.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBaseService]
    });
  });

  it('should ...', inject([HttpBaseService], (service: HttpBaseService) => {
    expect(service).toBeTruthy();
  }));
});
