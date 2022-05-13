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
      id:'GV1',
      name:'Nguyễn Văn A',
      age:20,
      gender:1,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:'GV2',
      name:'Nguyễn Văn B',
      age:40,
      gender:1,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:'GV3',
      name:'Nguyễn Văn C',
      age:20,
      gender:0,
      avatar:'https://picsum.photos/100',
      status:1
    },
    {
      id:'GV4',
      name:'Nguyễn Văn D',
      age:45,
      gender:0,
      avatar:'https://picsum.photos/100',
      status:0
    },
  ];

  StudentName='Minhkbph17672'
  StudentId='PH123'

}
