import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
   product:Product;
   cartItemValue: number=1;
  constructor(
    private productServie:ProductService,
    private activateRoute:ActivatedRoute,
    private lsService: LocalStorageService,
  ) { 
    this.product={
      _id:"",
      name:'',
      price:'',
      img:'',
      decs:'',
      status:0,
   };
  }
  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['id']
    this.productServie.getProduct(idFromUrl).subscribe(data=>{
      this.product=data;
    });
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }
  addToCart() {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      id: this.product._id,
      name: this.product.name,
      price:this.product.price,
      value: +this.cartItemValue
    };
    this.lsService.setItem(addItem);
    // 5. Cập nhật lại giá trị cho ô input value
    this.cartItemValue = 1;
  }

}