import { Component, Input } from '@angular/core';
import { Category } from 'src/app/modules/CategoryInf';
import { Product } from 'src/app/modules/ProductInf'; 

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent {
  @Input()   productMD:any;
  @Input() test:boolean=true;
  
  categoryMD:Category={};
}
