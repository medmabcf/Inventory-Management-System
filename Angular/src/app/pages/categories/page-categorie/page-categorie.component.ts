import { Component } from '@angular/core';
import { OnInit ,Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {CategoryDto} from '../../../../gs-api/src/models/category-dto';
import {CategoryService} from '../../../services/category/category.service';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent implements OnInit {
    
  CategoriesList: any  = [];
  cat :any;
  errorMsgs = '';
  constructor(
    private router: Router,
    private categoryservice: CategoryService
    
  ) { }
  
  ngOnInit(): void {
    this.refreshCategory();
    throw new Error('Method not implemented.');
  }
  refreshCategory(){
    this.categoryservice.getCategoriesList().subscribe(data=>{
      this.CategoriesList=data;
    })
  }
  modifyCategory(id?: number): void {
    this.router.navigate(['newcategory', id]);
  }


   
}
