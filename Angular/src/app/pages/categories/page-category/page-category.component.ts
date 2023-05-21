import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit ,Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {CategoryDto} from '../../../../gs-api/src/models/category-dto';
import {CategoryService} from '../../../services/category/category.service';
//import {MatDialog} from '@angular/material/dialog'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  CategoriesList: any  = [];
  cat :any;
  delete_id: number=-1;
  errorMsgs = '';
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private categoryservice: CategoryService
    
  ) { }
  
 
  openModal(content: any,id?:number) {
    if(id)this.delete_id=id;
    this.modalService.open(content);
  }
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
  deleteCategory(){
  if(this.delete_id!=-1){
    var val = {category_id:this.delete_id

           };
      this.categoryservice.deleteCategory(val,this.delete_id).subscribe((response) => {
          // Handle successful response here
            alert("deleted successfully");
            this.refreshCategory();
        },
        (error) => {
          // Handle error here
          alert('An error occurred: ' + error);
        }
      );
   }
  }
  gotonewCategory():void{
    this.router.navigate(['newcategory']);
  }
 
   
}
