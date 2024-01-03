import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        SharedModule,
        FormsModule
    ]
})
export class ProductsModule { }
