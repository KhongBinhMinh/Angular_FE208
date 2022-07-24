import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Cart } from 'src/app/types/Cart';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css']
})
export class CartHomeComponent implements OnInit {
  cartItems:Cart[]
  Totalprice:number
  constructor(
    private lsStorgeServices : LocalStorageService,
  ) { 
    this.cartItems=[],
    this.Totalprice=0
  }

  ngOnInit(): void {
    this.cartItems= this.lsStorgeServices.getItem()
    this.cartItems.map(item=>this.Totalprice+= this.onTotalprice(+item.price!,item.value))
  }
  onTotalprice(price:number,value:number):number{
    return price*value
  }

}
