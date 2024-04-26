import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {VehicleComponent} from "./vehicle.component";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [VehicleComponent],
  exports: [VehicleComponent]
})
export class VehicleModule {
}
