import { Component } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
constructor(private com: ComunicationService){}
  users: any[] = [];
  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    this.com.getUsers()
    .then(response =>{
      this.users = response;
    })
    .catch(error => {
      console.log(error);
    });
  }
  deleteUser(id: number){
    this.com.deleteUser(id)
    .then(response =>{
      this.getUsers();
    })
    .catch(error =>{
      console.log(error);
    })
  }

}
