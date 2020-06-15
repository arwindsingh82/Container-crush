import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { PmMaterialModule } from './material-module';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContactusComponent } from './contactus/contactus.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactusComponent
    
  ],

  

  imports: [
    BrowserModule,
    AlertModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    PmMaterialModule,
    FormsModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgMatSearchBarModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    ReactiveFormsModule

  ],


  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
