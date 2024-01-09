import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { NumbersTableComponent } from '../converter/components/numbersTable/numbersTable.component';
import { CurrenciesTableComponent } from './currencies-table/currencies-table.component';



@NgModule({
  declarations: [
    SelectComponent,
    NumbersTableComponent,
    CurrenciesTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SelectComponent,
    NumbersTableComponent,
    CurrenciesTableComponent
  ]
})
export class SharedModule { }
