import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/modules/ProductInf';
@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {
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
