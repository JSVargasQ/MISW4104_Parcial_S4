import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {DebugElement} from "@angular/core";
import { faker } from '@faker-js/faker';

import {Vehicle} from "./vehicle";

import {VehicleComponent} from './vehicle.component';
import {VehicleService} from "./vehicle.service";
import {By} from "@angular/platform-browser";

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehicleComponent],
      providers: [VehicleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    component.vehicles = [];

    for (let i = 0; i < 3; i++) {
      component.vehicles.push(
        new Vehicle(
          faker.datatype.number(),
          faker.vehicle.manufacturer(),
          faker.vehicle.model(),
          faker.word.words(1),
          faker.datatype.number({ min: 1950, max: 2025 }),
          faker.datatype.number({ min: 0, max: 200000 }),
          faker.vehicle.color(),
          faker.image.imageUrl()
        )
      )
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist 3 vehicles', () => {
    expect(component.vehicles.length).toBe(3);
  });

  it('should create a table', () => {
    const tableElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
  });
  
  it('should have a header row', () => {
    const headerRow = fixture.nativeElement.querySelector('thead tr');
    expect(headerRow).toBeTruthy();
  });

  it('should have 3 vehicle rows', () => {
    const tableBody = fixture.debugElement.query(By.css('tbody'));
    const tableRows = tableBody.queryAll(By.css('tr'));
    expect(tableRows.length).toBe(3);
  });
});
