import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../_models/contracts/product';

@Component({
  selector: 'app-product-output',
  templateUrl: './product-output.component.html',
  styleUrls: ['./product-output.component.css']
})
export class ProductOutputComponent implements OnInit {
  @Input() product?:IProduct;
  constructor() { }
  ngOnInit(): void {
  }
}
