import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  private path: String = "https://www.themealdb.com/api/json/v1/1/";

  constructor(private http: HttpClient) {}
  
  getPlatilloRandom() {
    return this.http.get(this.path + 'random.php');
  }

}
