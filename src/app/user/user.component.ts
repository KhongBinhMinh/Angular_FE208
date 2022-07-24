import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //Nơi quản lí tất cả dữ liệu và logic của chức năng user
  formValues ={
    id:0,
    name:'',
    age:0,
    email:''
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

  onParentSubmit(formData:any){
    console.log('parent form data ', formData);
      //1.Tìm ra id lơn nhất
      const userIds = this.users.map(user=>user.id).sort((a,b)=>a-b);
      console.log(userIds)
      const newId = userIds[userIds.length-1];
      if (this.formValues.id == 0) {
          //2.Thêm vào mảng
      this.users.push({
        ...formData,//Giá trị con truyền sang
        id:newId +1
       });
      }else{
        const idx = this.users.findIndex((user) => user.id === this.formValues.id)
        if (idx > -1){  
        this.users[idx] = {
          ...formData, 
          id:this.formValues.id
        };
        }
      }
  }

  onParentDelete(userId:number){
    this.users = this.users.filter(user => user.id !== userId);
  }
  onParentEdit(userId:number){
    //1.Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);
    if (editUser) {
      this.formValues = {...editUser};
    }
    return alert('Không tìm thấy user đó!');
  }
}
