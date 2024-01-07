import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() header1: string = '';
  @Input() header2: string = '';
  @Input() data: any[] = [];
  @Input() devideValue!: number;
  @Input() muliValue!: number;
}
