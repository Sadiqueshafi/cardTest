import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HorizontalcartComponent } from './card/horizontalcart/horizontalcart.component';
import { VerticalcartComponent } from './card/verticalcart/verticalcart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormDataComponent } from './form/form-data/form-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {AngularFireModule} from 'angularfire2';
// import{Angular} from 'angularfire2';
// import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HorizontalcartComponent,
    VerticalcartComponent,
    FormDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
