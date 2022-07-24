import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId:string;
  constructor(
    private productService: ProductService,
    private router: Router,//điều hướng
    private activateRoute: ActivatedRoute
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
        this.onValidateNameHasProduct
        
      ]),//FormControl(giá trị mặc định)
      //price: new FormControl(0)
      price: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      decs: new FormControl('', [Validators.required]),

    });
    this.productId = '';
   }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data =>{
        //Cập nhật data cho form(data:{id:...,name:'...'})
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          img:data.img,
          decs:data.decs
        })
      })
    }

  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if (!inputValue.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  redirectToList(){
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit(){
    // console.log(this.productForm.value);
    //1.nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value

    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId,data).subscribe(data =>{
        this.redirectToList();
      })
    }
    //2.call API tạo mới
    return this.productService.createProduct(data).subscribe(data => {
    //3.Quay lại ds product
    this.redirectToList();
    //3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API lấy ds mới
    })
  }
}
