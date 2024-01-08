import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrenciesConvertService } from '../../services/currencies-convert.service';
import { Rates } from '../../models/rates.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  updatedFromValue!: string;
  updatedToValue!: string;
  updatedFromKey!: string;
  updatedToKey!: string;

  exchangeRates: any;

  constructor(
    private router: Router,
    private currenciesConvertService: CurrenciesConvertService
  ) {}

  ngOnInit() {
    this.getRates();
  }

  detailsToUSD() {
    this.routerNav();

    this.updatedFromValue = 'United States Dollar';
    this.updatedToValue = 'Euro';

    this.updatedFromKey = 'USD';
    this.updatedToKey = 'EUR';

    this.updateServiceValues();
    this.onNavConvert();
  }

  detailsToEUR() {
    this.routerNav();

    this.updatedFromValue = 'Euro';
    this.updatedToValue = 'United States Dollar';

    this.updatedFromKey = 'EUR';
    this.updatedToKey = 'USD';

    this.updateServiceValues();
    this.onNavConvert();
  }

  routerNav() {
    this.router.navigate(['/details']);
  }

  updateServiceValues() {
    this.currenciesConvertService.fromValue = this.updatedFromValue;
    this.currenciesConvertService.toValue = this.updatedToValue;

    this.currenciesConvertService.fromKey = this.updatedFromKey;
    this.currenciesConvertService.toKey = this.updatedToKey;
  }

  getRates() {
    let latestRates: Rates;
    this.currenciesConvertService.getLatestRates().subscribe((data: any) => {
      latestRates = data;
      this.exchangeRates = latestRates.rates;
    });
  }

  // Calculate the convertedAmount value and display the result with details & home pages
  onNavConvert() {
    let fromRate = (this.currenciesConvertService.fromRateValue =
      this.exchangeRates[this.updatedFromKey]);
    let toRate = (this.currenciesConvertService.toRateValue =
      this.exchangeRates[this.updatedToKey]);
    this.currenciesConvertService.convertedAmountValue =
      (this.currenciesConvertService.amountValue / fromRate) * toRate;
  }
}
