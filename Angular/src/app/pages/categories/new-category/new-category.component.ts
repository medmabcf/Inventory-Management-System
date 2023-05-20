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
  description: string="";
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryservice: CategoryService
    
  ) { }
  @Input() cat:any;
  

  addCategory(){
    var val = {category_id:this.category_id,
                 name:this.description
                      };

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
 
  ngOnInit(): void {
  
    this.category_id  = this.activatedRoute.snapshot.params['id'];
  
   
    
    


  }
                    
}
