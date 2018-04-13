/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeesManagerService } from './EmployeesManager.Service';

describe('Service: EmployeesManager.Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesManagerService]
    });
  });

  it('should ...', inject([EmployeesManagerService], (service: EmployeesManagerService) => {
    expect(service).toBeTruthy();
  }));
});
