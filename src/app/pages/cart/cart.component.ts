import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   catItems : ProductCart[] = [];
   cartItemValues: number=0
  constructor(
    private lsServices : LocalStorageService
  ) { }

  ngOnInit(): void { this.onSetCartItems();

    this.lsServices.watchService().subscribe(data=>{
      this.onSetCartItems();   
    })
  }
  onSetCartItems(){
    this.catItems= this.lsServices.getItem();
    this.cartItemValues=0;
    this.catItems.forEach(item=>{
      this.cartItemValues+=item.value;
    })
  }

}
