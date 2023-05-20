import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoryService} from '../../../services/category/category.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
  
})
export class NewProductComponent implements OnInit{
ListCategories:any=[];
constructor(
  private router:Router,
  private categoryservice: CategoryService
){

}
ngOnInit(): void {
  this.getcategorylist();
}
getcategorylist(){
  this.categoryservice.getCategoriesList().subscribe(data=>{
      this.ListCategories=data;
  })
}
cancel() : void{
this.router.navigate(['articles']);
}
}
