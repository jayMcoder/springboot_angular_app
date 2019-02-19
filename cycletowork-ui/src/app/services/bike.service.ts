import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private httpClient: HttpClient) { }

  getBikes() {
    return this.httpClient.get('/server/api/v1/bikes');
  }

  getBike(id: number) {
    return this.httpClient.get('/server/api/v1/bike/' + id);
  }

  registerBike(bike) {
    const body = JSON.stringify(bike);
    return this.httpClient.post('server/api/v1/bikes', body, httpOptions);
  }
}
