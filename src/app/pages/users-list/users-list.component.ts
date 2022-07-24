import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/types/Product';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:Users[]
  constructor(
    private userServices :UserService,
  ) { 
    this.users= []
  }

  ngOnInit(): void {
    this.onGetlist()
    this.userServices.listusers().subscribe((data)=>{
      this.users = data
      console.log(data)
    })
  }
  onGetlist(){
    this.userServices.getUsers().subscribe((data)=>{
      this.users=data
  });
}
  onDelete(id:string | number){
    const confirmDelete = confirm('Bạn có muốn xóa không')
    if(confirmDelete && id){
       this.userServices.deleteUsers(id).subscribe((data)=>{
         // Cập nhật danh sách
         this.onGetlist();
       })
    }
 }

}
