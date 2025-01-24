import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  kosar:any=[]
  private kosarSub = new BehaviorSubject<any>([])
  constructor() { }
  getCart(){
    return this.kosarSub
  }
  addProduct(product:any){
    let elem = this.kosar.filter(
      (p:any)=>p.id == product.id
    )
    console.log("elem",elem)
    if(elem.length!=0){
      elem.db=product.db
    }
    else{
      delete product.leiras
      this.kosar.push(product)
    }
    this.kosar.push(product)
    this.kosarSub.next(this.kosar)
}



}


