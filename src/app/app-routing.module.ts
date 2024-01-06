import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  { path: 'converter', component: ConverterComponent },
  { path: '', component: ConverterComponent, pathMatch: 'full' },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
