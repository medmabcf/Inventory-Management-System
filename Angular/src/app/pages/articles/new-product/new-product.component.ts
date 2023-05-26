import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoryService} from '../../../services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Category } from 'src/app/modules/CategoryInf';
import { Product } from 'src/app/modules/ProductInf'; 

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
  
})

export class NewProductComponent implements OnInit{
ListCategories:any=[];
productMD:Product={};
selectedcategory:Category={};
id?:number;
  activatedRoute: any;
constructor(
  private router:Router,
  private categoryservice: CategoryService,
  private productservice: ProductService
){

}
ngOnInit(): void {
  this.getcategorylist();
  this.id = this.activatedRoute.snapshot.params['id'];


}
// get category list
getcategorylist(){
  this.categoryservice.getCategoriesList().subscribe(data=>{
      this.ListCategories=data;
      console.log(this.ListCategories);
  })
}
// add product 
addproduct(){
  

  console.log(this.productMD.category);
  console.log(this.productMD.name);
  this.productservice.addProduct(this.productMD).subscribe((response) => {
      // Handle successful response here
    
        alert("added successfully");
     
    },
    (error) => {
      // Handle error here
      //console.error('An error occurred:', error);
      alert('An error occurred: ' + error);
    }
  );
}

//cancel
cancel() : void{
this.router.navigate(['articles']);
}
gotonewCategory():void{
  this.router.navigate(['newcategory']);
}
}
