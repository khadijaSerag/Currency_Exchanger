import { Component, OnInit } from '@angular/core';
import { CurrenciesConvertService } from '../converter/services/currencies-convert.service';
import { Rates } from '../converter/models/rates.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  amount!: number;
  from!: string;
  to!: string;
  fromCode!: string;
  toCode!: string;
  converted!: number;

  fromRate: number[] = [];
  toRate: number[] = [];

  exchangeRates: any;

  staticToCurrencies: any[];
  staticFromCurrencies: any[];

  constructor(private currenciesService: CurrenciesConvertService) {
    // Use in Currency-converter component
    this.amount = this.currenciesService.amountValue;
    this.from = this.currenciesService.fromValue;
    this.to = this.currenciesService.toValue;
    this.converted = this.currenciesService.convertedAmountValue;

    // Use in Currencies-table shared
    this.fromCode = this.currenciesService.fromKey;
    this.staticToCurrencies = ['EGP', 'EUR', 'AUD'];
    this.staticFromCurrencies = [this.fromCode, this.fromCode, this.fromCode];
  }

  ngOnInit() {
    this.getRates();
  }

  getRates() {
    let latestRates: Rates;
    this.currenciesService.getLatestRates().subscribe((data: any) => {
      latestRates = data;
      this.exchangeRates = latestRates.rates;
      this.rateValues();
    });
  }

  rateValues() {
    for (let i = 0; i <= this.staticToCurrencies.length; i++) {
      this.fromRate.push(this.exchangeRates[this.fromCode]);
      this.toRate.push(this.exchangeRates[this.staticToCurrencies[i]]);
    }
  }
}
