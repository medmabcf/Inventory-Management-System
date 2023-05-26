import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/modules/ProductInf';
@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
  ProductsList:any=[];
  constructor(
    private router:Router,
    private categoryservice: CategoryService,
    private productservice: ProductService
    ){
      
  }
  ngOnInit(): void {
    this.refreshproduct();
  }
  refreshproduct(){
    this.productservice.getProductsList().subscribe(data=>{
      this.ProductsList=data;
    })
  }
  newProduct(): void {
    this.router.navigate(['newproduct']);
  }
  

}
