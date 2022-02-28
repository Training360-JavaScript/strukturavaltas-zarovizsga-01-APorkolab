import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = environment.apiUrl;
  endString: string = '';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/${this.endString}`);
  }

  getOne(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${this.endString}/${id}`);
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}/${this.endString}`, car);
  }

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}/${this.endString}/${car.id}`,
      car
    );
  }

  delete(car: Car): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}/${this.endString}/${car.id}`);
  }
}
