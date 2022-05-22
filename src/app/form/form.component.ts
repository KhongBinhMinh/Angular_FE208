import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues=
    {
      id: 0,
      name:"",
      age: 0,
      email:"",
      avatar:'',
      sdt:''
    }
  
  users = [
    {
      id:1,
      name:'minhkb',
      age:30,
      email:'minhkbph@gmail.com',
      avatar:"https://picsum.photos/100",
      sdt:"123456789"
    },
    {
      id:10,
      name:'minhkb1',
      age:30,
      email:'minhkbph1@gmail.com',
      avatar:"https://picsum.photos/100",
      sdt:"987654321"
    }
  ];
  
  onSubmit(userForm:NgForm){ //Nhận toàn bộ form
    //Tìm ra id lơn nhất
    const userIds = this.users.map(user=>user.id).sort((a,b)=>a-b);
    console.log(userIds)
    const newId = userIds[userIds.length-1];
    if (this.inputValues.id == 0) {
        //2.Thêm vào mảng
    this.users.push({
      ...userForm.value,//Lấy ra object giá trị của form
      id:newId +1
     });
    }else{
      const idx = this.users.findIndex((user) => user.id === this.inputValues.id)
      if (idx > -1){  
      this.users[idx] = {
        ...userForm.value, 
        id:this.inputValues.id
      }
      }
    }
  

    //3.Cập nhật lại giá trị ban đầu
    //  userForm.resetForm();//Nếu không truyền gì thì tất cả về null
     userForm.resetForm({
       name:'',
       age:0,
       email:'',
       avatar:'',
       sdt:''
     });
  }

  onDelete(userId:number){
      this.users = this.users.filter((user) => user.id !== userId);
  }

  onEdit(userId:number){
      const editUser = this.users.find((user) => user.id === userId);
      console.log(editUser);
      if (editUser) {
        this.inputValues = {...editUser};
      }
  }
}
