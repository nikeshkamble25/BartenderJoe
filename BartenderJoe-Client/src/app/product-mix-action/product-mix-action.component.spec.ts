import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMixActionComponent } from './product-mix-action.component';

describe('ProductMixActionComponent', () => {
  let component: ProductMixActionComponent;
  let fixture: ComponentFixture<ProductMixActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMixActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMixActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
