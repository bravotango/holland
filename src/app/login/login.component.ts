import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[

    trigger('loadIn', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.5s ease-in')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  username:string = '';  //username input
  password:string = '';  //password input
  isValidUser:boolean = null;  //true when checkUser() validates entered credentials


  ngOnInit() {
  }

  //checkUser sets isValidUser flag to true if the combination matches - username: 'admin', password: 'password'
  checkUser(){
    console.log('checking credentials');
    console.log(this.username);
    console.log(this.password);

    //check to see if username and password are valid.
    //TODO: this should be a service call passing the entered username and password as parameters and getting true or false back from the service
    if (this.username === 'admin' && this.password === 'password') {
      this.isValidUser = true;
    } else {
      this.isValidUser = false;
      console.log(this.isValidUser);
    }

  }


  logOut(){
    //clear all the login variables to initial state
    this.username = '';
    this.password = '';
    this.isValidUser = null;   
  }


}
