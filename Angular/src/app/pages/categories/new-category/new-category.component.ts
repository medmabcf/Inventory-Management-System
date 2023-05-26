import { Component } from '@angular/core';
import { OnInit ,Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {CategoryDto} from '../../../../gs-api/src/models/category-dto';
import {CategoryService} from '../../../services/category/category.service';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  //categorydto: CategoryDto = {};
  errorMsg: Array<string> = [];
  category_id!: number;
  id?:number;
  description: string="";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryservice: CategoryService
    
  ) { }
  @Input() cat:any;
  

  save(){
    var val = {category_id:this.category_id,
      name:this.description
           };
           console.log(val);
    if(this.id!==undefined){
      this.updateCategory(val,this.category_id);
    }
    else{
      this.addCategory(val);
    }
  }
  addCategory(val:any){


    this.categoryservice.addCategory(val).subscribe((response) => {
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
  //update category
  updateCategory(val:any,id:number){

    this.categoryservice.updateCategory(val,id).subscribe((response) => {
        // Handle successful response here
      
          alert("updated successfully");
       
      },
      (error) => {
        // Handle error here
        //console.error('An error occurred:', error);
        alert('An error occurred: ' + error);
      }
    ); 
  }
  ngOnInit(): void {
  
    this.id  = this.activatedRoute.snapshot.params['id'];
    if(this.id!==undefined)this.category_id=this.id;
    console.log(this.id);
    
   
    
    


  }
                    
}
