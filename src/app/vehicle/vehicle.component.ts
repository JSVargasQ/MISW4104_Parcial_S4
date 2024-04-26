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

  // Constructor
  constructor(private vehicleService: VehicleService) {
    this.vehicles = [];
  }

  // Lifecycles
  ngOnInit() {
    this.getVehicles();
  }

  // Methods
  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }

}
