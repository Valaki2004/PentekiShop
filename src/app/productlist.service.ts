import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  productsApi="https://boooooot-f4f93-default-rtdb.europe-west1.firebasedatabase.app/termekek/"
  productsSub= new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) { 
    this.dowloandProducts()
  }
  getProducts(){
    return this.productsSub;
  }
  private dowloandProducts(){
    this.http.get(this.productsApi+".json").subscribe(
      (product:any)=> {
      let tomb =[]
      for(const key in product){
        tomb.push({id:key, db:0,...product[key]})
      }
      this.productsSub.next(tomb)
    })
  }
  postProduct(product:any){
    this.http.post(this.productsApi,product).forEach(
    ()=>this.dowloandProducts()
    )
  }
  putProduct(product:any){
    this.http.put(this.productsApi+product.id,product).forEach(
    ()=>this.dowloandProducts()
    )
  }
  deleteProduct(product:any){
    this.http.delete(this.productsApi+product.id).forEach(
    ()=>this.dowloandProducts()
    )
  }
}
