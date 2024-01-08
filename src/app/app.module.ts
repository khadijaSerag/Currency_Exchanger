import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './converter/components/header/header.component';

import { CurrencyConverterComponent } from './converter/components/currency-converter/currency-converter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConverterComponent } from './converter/converter.component';
import { SharedModule } from "./shared/shared.module";
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CurrencyConverterComponent,
        ConverterComponent,
        DetailsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ]
})
export class AppModule { }
