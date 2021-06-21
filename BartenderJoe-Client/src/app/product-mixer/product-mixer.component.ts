import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../_models/contracts/product';

@Component({
  selector: 'app-product-mixer',
  templateUrl: './product-mixer.component.html',
  styleUrls: ['./product-mixer.component.css']
})
export class ProductMixerComponent implements OnInit {
  @Input() product?:IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
