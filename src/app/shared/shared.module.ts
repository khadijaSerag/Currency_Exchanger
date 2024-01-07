import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    SelectComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SelectComponent,
    TableComponent
  ]
})
export class SharedModule { }
