import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesConvertService {
  accessKey: string = '80c5bf558cf48709917289fce97736bd';
  paramsKey = new HttpParams();

  constructor(private http: HttpClient) {
    this.paramsKey = this.paramsKey.set('access_key', this.accessKey);
  }

  getAllCurrencies() {
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'symbols', { params });
  }

  getConvertedAmount(){
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'latest', { params });
  }
}
