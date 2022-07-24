import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup

  constructor(
    private authService:AuthService,
    private router:Router
  ) {
    this.signupForm = new FormGroup({
      name:new FormControl('',[
        Validators.required
      ]),
      email:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required
      ])
    })
   }

  ngOnInit(): void {
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;

    if (!inputValue.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit(){
    const submitData = this.signupForm.value
    this.authService.signup(submitData).subscribe(data=>{
      
      localStorage.setItem('loggedInUser',JSON.stringify(data));
   
      this.router.navigateByUrl('/auth/login')
    })
  }
}
