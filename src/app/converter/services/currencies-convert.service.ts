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

  accessKey: string = 'c256efbfdb9eb9d47f643a7a87bc76ee';
  paramsKey = new HttpParams();

  constructor(private http: HttpClient) {
    this.paramsKey = this.paramsKey.set('access_key', this.accessKey);
  }

  getAllCurrencies() {
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'symbols', { params });
  }

  getConvertedAmount() {
    let params = this.paramsKey;
    return this.http.get(environment.baseUrl + 'latest', { params });
  }
}