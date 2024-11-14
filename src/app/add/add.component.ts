import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ComunicationService } from '../comunication.service';
import { user } from '../userModel/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private com: ComunicationService) { }
  
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', Validators.required)
  });
  get firstname() {
    return this.userForm.get('firstname');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }

  get email() {
    return this.userForm.get('email');
  }

  get country() {
    return this.userForm.get('country');
  }
  add() {
    if (this.userForm.valid) {
      let newuser = new user();
      newuser.firstname = this.firstname?.value!;
      newuser.lastname = this.lastname?.value!;
      newuser.email = this.email?.value!;
      newuser.country = this.email?.value!;
      this.com.addUser(newuser)
      .then(response =>{
        console.log(newuser);
        
      })
      .catch(error =>{
        console.log(error);
        
      })
    }
  }
}
