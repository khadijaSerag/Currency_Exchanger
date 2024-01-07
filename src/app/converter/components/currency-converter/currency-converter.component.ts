import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrenciesConvertService } from '../../services/currencies-convert.service';
import { Currencies } from 'src/app/converter/models/currencies.interface';
import { Rates } from 'src/app/converter/models/rates.interface';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  currenciesCode: string[] = [];

  amount!: number;

  fromCurrency: string = '';
  toCurrency: string = '';

  exchangeRates: any;
  convertedAmount: any;

  fromRate!: number;
  toRate!: number;

  staticAmounts = [1, 10, 50, 100, 1000];

  constructor(private currenciesService: CurrenciesConvertService) {}

  ngOnInit() {
    this.getCurrencies();
    this.getRates();
  }

  // FromCurrency selected value
  convertFromCurrency(event: any) {
    this.fromCurrency = event.target.value;
    this.fromRate = this.exchangeRates[this.fromCurrency];
    this.convertedAmount = null;
  }

  // ToCurrency selected value
  convertToCurrency(event: any) {
    this.toCurrency = event.target.value;
    this.toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = null;
  }

  // Detect the changes in amount input
  onKeyDown(event: any) {
    this.convertedAmount = null;
  }

  // Get all keys only from api object
  getCurrencies() {
    let currencies: Currencies;
    this.currenciesService.getAllCurrencies().subscribe((res: any) => {
      currencies = res;
      this.currenciesCode = Object.keys(currencies.symbols);
    });
  }

  // Get all rates in api latest
  getRates() {
    let latestRates: Rates;
    this.currenciesService.getConvertedAmount().subscribe((data: any) => {
      latestRates = data;
      this.exchangeRates = latestRates.rates;
    });
  }

  // Make the convert Calculation to display the convertedAmount result
  onConvertCurrency() {
    this.fromRate = this.exchangeRates[this.fromCurrency];
    this.toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount / this.fromRate) * this.toRate;
  }

  // Make swap button
  swapValues() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;

    this.onConvertCurrency();
  }
}
