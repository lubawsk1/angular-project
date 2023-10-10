import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';
import { OrderBy2Pipe } from './pipes/order-by2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    AlphabeticalPipe,
    OrderByPipe,
    OrderBy2Pipe,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
