import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbers-table',
  templateUrl: './numbersTable.component.html',
  styleUrls: ['./numbersTable.component.scss'],
})
export class NumbersTableComponent {
  @Input() header1: string = '';
  @Input() header2: string = '';
  @Input() data: any[] = [];
  @Input() devideValue!: number;
  @Input() muliValue!: number;
}
