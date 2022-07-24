import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { CartHomeComponent } from './pages/cart-home/cart-home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {

  path: '',
  children: [
    {
      path: '',
      component:HomeComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path:':id',
      component:ProductDetailComponent
    },
    
  ]
},


{
  path:'category/:id',
  component: CategoryComponent
},




{
  path:'admin',
  component: AdminLayoutComponent,
  // canActivate: [CanAccessAdminGuard],
  children:[
    // {
    //   path:'',
    //   redirectTo:'user',
    //   pathMatch:'full'
    // },
    // {
    //   path:'user',
    //   component: UserComponent
    // }
    {
      path:'products',
      children:[
        {
          path:'',
          component: AdminProductListComponent
        },
        {
          path:'create',
          component:AdminProductFormComponent
        },
        {
          path:'edit/:id',
          component:AdminProductFormComponent
        },
        {
          path:':id',
          component:AdminProductDetailComponent
        },//Đẩy /admin/products/id xuống dưới cùng tránh việc nhầm id='create'
      ]
    },
    {
      path:'users',
      component:UsersListComponent
    }
  ]
},
{
  path:'auth',
  children:[  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'listcart',
    component:CartHomeComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] //đưa vào để route bên trên có thể dùng
})
export class AppRoutingModule { }
