import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesConvertService {
  amountValue!: number;
  fromValue!: string;
  toValue!: string;
  convertedAmountValue!: number;

  fromKey!: string;
  toKey!: string;

  fromRateValue!: number;
  toRateValue!: number;

  accessKey: string = '2ef0392559e2842b87140f472d056ad8';
  paramsKey = new HttpParams();

  constructor(private http: HttpClient) {
    this.paramsKey = this.paramsKey.set('access_key', this.accessKey);
  }

  getAllCurrencies() {
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'symbols', { params });
  }

  getLatestRates() {
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'latest', { params });
  }
}
