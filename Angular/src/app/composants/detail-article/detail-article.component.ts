import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/modules/CategoryInf';
import { Product } from 'src/app/modules/ProductInf'; 
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input()   productMD:Product={};
  @Input() test:boolean=true;
  categoryMD:Category={};
  delete_id?: number;
  productservice: any;
  constructor(private categoryservice:CategoryService,
    private router:Router
    ){}
getcategory(){
      if(this.productMD.category!==undefined){
        this.categoryservice.retrieveCategoryById(this.productMD.category).subscribe(cat => {
          this.categoryMD= cat ;
           console.log(cat);
         }
       );

      }
      
  }

  modifyProduct(): void {
    this.router.navigate(['newproduct', this.productMD.product_id]);
  }

  deleteProduct(){
console.log(this.productMD);
        this.productservice.deleteProduct(this.productMD,this.productMD.product_id).subscribe((response:any) => {
            // Handle successful response here
              alert("deleted successfully");
             // this.refreshCategory();
          },
          (error:any) => {
            // Handle error here
            alert('An error occurred: ' + error);
          }
        );
     }
    
  

  ngOnInit(): void {
    this.getcategory();
    
  }


}

