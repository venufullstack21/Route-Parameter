import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:ProductsDashboardComponent
  },
]

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductsModule { }
