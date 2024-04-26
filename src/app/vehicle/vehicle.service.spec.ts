import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {VehicleService} from './vehicle.service';

describe('Service: Vehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleService]
    });
  });

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
