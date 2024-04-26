import {Component, OnInit} from '@angular/core';
import {VehicleService} from "./vehicle.service";
import {Vehicle} from "./vehicle";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent implements OnInit {

  // Attributes
  vehicles: Array<Vehicle>;
  countMake: { [marca: string]: number };

  object = Object;

  // Constructor
  constructor(private vehicleService: VehicleService) {
    this.vehicles = [];
    this.countMake = {};
  }

  // Lifecycles
  ngOnInit() {
    this.getVehicles();
  }

  // Methods
  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this._calculateMakeByVehicles();
    });
  }

  private _calculateMakeByVehicles() {
    let countMake: { [marca: string]: number } = {};

    this.vehicles.forEach(vehicle => {
      if (countMake.hasOwnProperty(vehicle.marca)) {
        countMake[vehicle.marca]++;
      } else {
        countMake[vehicle.marca] = 1;
      }
    });

    this.countMake = countMake;
    console.log(countMake);
  }
}
