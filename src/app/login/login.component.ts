import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any = '';
  password: any = '';
  constructor(public route: Router) { }

  ngOnInit() {
  }

  goToSignup() {
    this.route.navigate(['/signup']);
  }

  login() {
    if (this.userName && this.password) {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      for (let i = 0; i < userDetails.length; i++) {
        if (userDetails[i].userName == this.userName && userDetails[i].password == this.password) {
          this.route.navigate(['/dashboard']);
          localStorage.setItem("loggedDetails", JSON.stringify([userDetails[i]]));
        } else if (userDetails[i].email == this.userName && userDetails[i].password == this.password) {
          this.route.navigate(['/dashboard']);
          localStorage.setItem("loggedDetails", JSON.stringify([userDetails[i]]));
        } else if (userDetails[i].mobileNo == this.userName && userDetails[i].password == this.password) {
          this.route.navigate(['/dashboard']);
          localStorage.setItem("loggedDetails", JSON.stringify([userDetails[i]]));
        } else if(userDetails.length == i) {
          console.log("Not a member");
          alert("Not a member");
        }
      }
    }
  }
}
