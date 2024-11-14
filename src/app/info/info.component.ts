import { Component, OnInit } from '@angular/core';
import { user } from '../userModel/user';
import { ComunicationService } from '../comunication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  user: user = new user();
  constructor(private com: ComunicationService, private route: ActivatedRoute){}
  ngOnInit(){
    let id = Number(this.route.snapshot.paramMap.get(('id')));
    this.getUserById(id);
  }

  getUserById(id: number){
    this.com.getById(id)
    .then(response => {
      this.user=response;
    })
    .catch(error =>{
      console.log(error);
      
    })
  }
}
