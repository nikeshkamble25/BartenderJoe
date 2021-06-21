import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../_models/contracts/product';

@Component({
  selector: 'app-product-mix-action',
  templateUrl: './product-mix-action.component.html',
  styleUrls: ['./product-mix-action.component.css']
})
export class ProductMixActionComponent implements OnInit {
  @Input() product?: IProduct;
  @Output() setMixingFlag = new EventEmitter();
  isMixed: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  setFlag(mixingFlag: boolean): void {
    if (this.product?.productId != undefined 
      && this.product?.productId > 0) {
      this.isMixed = mixingFlag;
      this.setMixingFlag.emit(mixingFlag);
    }else{
    }
  }
}
