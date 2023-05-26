import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductaddComponent } from './components/productAdd/productadd/productadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductEditComponent,
    ProductListComponent,
    ServicesComponent,
    ProductaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
