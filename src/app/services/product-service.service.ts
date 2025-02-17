import { Injectable, Type } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }


  productName: String= ''
  productPrice: Number | null = null;

  setProductName(e: String){
    this.productName = e;
  }
  setProductPrice(e: Number | null){
    this.productPrice = e;
  } 
}
