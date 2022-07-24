import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
//  Kiểu dữ liệu Observalble sẽ giúp lắng nghe API trả về kết quả

  getProducts ():Observable<Product[]> {
     return this.http.get<Product[]>(environment.products)
  }

  getProduct (id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`);
  }
  
  deleteProduct (id:number | string): Observable<any>{
    return this.http.delete(`${environment.products}/${id}`);
  }
  //Dữ liệu gửi đi{name:String}, nhận về {id:number, name:string}
  createProduct(data: ProductCreate):Observable<Product>{
    return this.http.post<Product>(`${environment.products}`,data);
  }
  updateProduct(id:string, data: ProductCreate):Observable<Product>{
    return this.http.put  <Product>(`${environment.products}/${id}`,data);
  }
}

