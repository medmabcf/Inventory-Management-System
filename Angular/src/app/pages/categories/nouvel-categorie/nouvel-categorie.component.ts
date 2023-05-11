import { Component } from '@angular/core';
import { OnInit ,Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryDto} from '../../../../gs-api/src/models/category-dto';
import {CategoryService} from '../../../services/category/category.service';
@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.css']
})
export class NouvelCategorieComponent implements OnInit {
  categorydto: CategoryDto = {};
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
    throw new Error('Method not implemented.');
  }
                    
}
