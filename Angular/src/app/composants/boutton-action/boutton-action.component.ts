import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.css']
})
export class BouttonActionComponent implements OnInit {
  @Input()
  isNewVisible=true;
  @Input()
  isExporterVisible=true;
  
  @Input()
  isImporterVisible=true;

  @Output()  buttonnewclicked=new EventEmitter<void>();
  
  constructor(
    private router: Router,
  ){}
  ngOnInit(): void {
  }
  bouttonNewClick(): void{
    this.buttonnewclicked.emit();

  }

}

