import { Component } from '@angular/core';
import { CurrenciesConvertService } from '../converter/services/currencies-convert.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  amount!: number;
  from!: string;
  to!: string;
  converted!: number;

  constructor(private currenciesService: CurrenciesConvertService) {
    this.amount = this.currenciesService.amountValue;
    this.from = this.currenciesService.fromValue;
    this.to = this.currenciesService.toValue;
    this.converted = this.currenciesService.convertedAmountValue;
  }
}
