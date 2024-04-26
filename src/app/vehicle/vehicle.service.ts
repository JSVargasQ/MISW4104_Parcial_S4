import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from '../../environments/environment';
import {Vehicle} from "./vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // Attributes
  private apiUrl = environment.apiVehicle;

  // Constructor
  constructor(private http: HttpClient) {
  }

  // Methods
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

}
