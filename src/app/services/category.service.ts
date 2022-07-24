import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../types/Product';
import { typeCateProduct } from '../types/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Khai báo http để có đối tượng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }

  // Kiểu dữ liệu Observale sẽ giúp lắng nghe API trả về k
listCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.category)
  }
  listOneCategory(id: string): Observable<typeCateProduct> {
    return this.http.get<typeCateProduct>(`${environment.category}/${id}`)
  }
}