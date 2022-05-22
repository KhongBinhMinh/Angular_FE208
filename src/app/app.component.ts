import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We16304';
  //Phần logic, định nghĩa giá trị biến 
  name = 'minhkbph17672';
  class = 'we16304'

  //Kiểu dữ liệu mảng
  teachers= [
    {
      id:1,
      name:'Nguyễn Văn A',
      age:20,
      gender:1,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:2,
      name:'Nguyễn Văn B',
      age:40,
      gender:1,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:3,
      name:'Nguyễn Văn C',
      age:20,
      gender:0,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:4,
      name:'Nguyễn Văn D',
      age:45,
      gender:0,
      avatar:'https://picsum.photos/100',
      status:0
    },
  ];

  StudentName='Minhkbph17672'
  StudentId='PH123'

  //Định nghĩa hàm khi click vào thẻ h1 ở file html
  schoolName = '';
  clickH1(){
    console.log('Đã click vào h1');
    this.schoolName='Poly';
  }
  //Định nghĩa hàm khi click nút ẩn hiện bảng
  showStatus = true;
  inputValue ='';
  changeTableStatus(){
     this.showStatus = !this.showStatus;
  }
  //Định nghĩa hàm khi thay đổi nội udng input
  changeInput(e:any){
    this.inputValue = e.target.value;
  }
  //Định nghĩa hàm nhận giá trị từ các Input
  inputValues = {
    name:'',
    age:'',
    avatar:'',
    gender:'0',
    status:'1'
  }

  onInputName(event:any,info:string){
     this.inputValues.name = (event.target.value, info)
  }

  onInputAge(event:any,info:string){
    this.inputValues.age = (event.target.value, info)
  }
  onInputAvatar(event:any,info:string){
    this.inputValues.avatar = (event.target.value, info)
  }
  onInput(event:any,key:'name'|'age'|'avatar'|'gender'|'status'){
    this.inputValues[key]= event.target.value
  }
  onSubmit(){
    //Thêm dữ liệu vừa thao tác ở form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age,//Đưa age từ chuỗi về số
      //bổ sung các thuộc tính còn thiếu
      gender:+this.inputValues.gender,
      status:+this.inputValues.status,
      id: this.teachers.length+1
    });
    //Cập nhật lại giá trị cho input ở form
    //[value]="this.inputValues.name"
    this.inputValues={
      name:'',
      age:'',
      avatar:'',
      gender:'0',
      status:'1'
    }
  }
}
