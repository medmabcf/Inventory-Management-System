import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCategorieComponent } from './nouvel-categorie.component';

describe('NouvelCategorieComponent', () => {
  let component: NouvelCategorieComponent;
  let fixture: ComponentFixture<NouvelCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
