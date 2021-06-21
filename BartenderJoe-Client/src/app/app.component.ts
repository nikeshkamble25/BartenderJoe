import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './_models/contracts/product';
import { LoggerService } from './_services/logger-service';
import { ProductService } from './_services/product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logs?:Observable<string[]>;
  constructor(private _prodService: ProductService,
    _loggerService: LoggerService) {
      this.logs=_loggerService.loggerList;
  }
  product: IProduct =
    {
      productId: 0,
      mixedProduct: "INAVLID PROD TP",
      productName: "CANNOT MIX IT",
      isMixed: false
    };
  ngOnInit(): void {

  }
  getProduct(id: string): void {
    let pid: number = isNaN(parseInt(id)) ? 0 : parseInt(id);
    this._prodService.getProduct(pid.toString())
      .subscribe(
        (res: IProduct) => {
          this.product = res;
        }
      );
  }
  getProductMixingFlag(flag: boolean): void {
    this.product.isMixed = flag;
  }
}
