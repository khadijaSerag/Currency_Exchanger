import { Component, OnInit } from '@angular/core';
import { CurrenciesConvertService } from '../../services/currencies-convert.service';
import { Currencies } from 'src/app/models/currencies.interface';
import { Rates } from 'src/app/models/rates.interface';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {

  currenciesCode: string[] = [];

  amount: any;
  fromCurrency: string = '';
  toCurrency: string = '';

  exchangeRates: any;
  convertedAmount: any;

  constructor(private currenciesService: CurrenciesConvertService) {}

  ngOnInit() {
    this.getCurrencies();
    this.getRates();
  }

  // fromCurrency selected value
  convertFromCurrency(event: any) {
    this.fromCurrency = event.target.value;
  }

  // toCurrency selected value
  convertToCurrency(event: any) {
    this.toCurrency = event.target.value;
  }

  // get all keys only from api object
  getCurrencies() {
    let currencies: Currencies;
    this.currenciesService.getAllCurrencies().subscribe((res: any) => {
      currencies = res;
      this.currenciesCode = Object.keys(currencies.symbols);
    });
  }

  // get all rates in api latest
  getRates() {
    let latestRates: Rates;
    this.currenciesService.getConvertedAmount().subscribe((data: any) => {
      latestRates = data;
      this.exchangeRates = latestRates.rates;
    });
  }

  // make the convert Calculation to display the convertedAmount result
  onConvertCurrency() {
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount / fromRate) * toRate;
  }

  swapValues() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
  }
}
