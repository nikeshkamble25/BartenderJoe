import { Component, EventEmitter, Input, KeyValueDiffer, OnInit, Output } from '@angular/core';
import { IProduct } from '../_models/contracts/product';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent implements OnInit{
  @Input() product?:IProduct;
  productId:any;
  @Output() sendProductId = new EventEmitter();  
  itemDiffer?: KeyValueDiffer<string, any>;
  constructor() { }
  ngOnInit() {
  }
  sendProduct(productId: string) {
    this.sendProductId.emit(productId);
  }
  onModelChange(modelData:any) {
    this.sendProduct(modelData);
  }
}
