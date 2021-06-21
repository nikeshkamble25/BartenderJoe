import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "../_models/contracts/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(this.baseUrl + "product/getproduct/" + id);
  }
}