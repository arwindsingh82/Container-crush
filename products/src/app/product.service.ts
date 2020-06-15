import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

 getProduct(): Observable<Product[]>{
 
   return this.http.get<Product[]>('http://cumulus-services-v1-cumulus.inmbzp8022.in.dst.ibm.com/products/getallproducts') as
   Observable<Product[]>;

 }

}
