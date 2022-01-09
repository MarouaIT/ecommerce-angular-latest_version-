import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  message: string = "";

  constructor(private registerService: RegisterService) {

  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    if (form != null) {
      form.reset();
      this.user = {

        firstname: '',
        lastname: '',
        email: '',
        password: ''

      }
    }

  }

  onRegisterUser(form: NgForm) {
    this.registerService.registerUser(form.value)
      .subscribe((data) => {
        console.log(data);

      },
        error => {
          console.error(error);
          this.message = "Bad Crendianls, Please enter a valid email and password";
        }
        
      )
  }


}