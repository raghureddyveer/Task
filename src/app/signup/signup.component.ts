import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userDetails: FormGroup;
  constructor() {
    this.userDetails = new FormGroup({
      uname: new FormControl('', Validators.required),
      name: new FormControl(),
      uemail: new FormControl(),
      usertype: new FormControl(),
      upass: new FormControl(),
      uconpass: new FormControl(),
      umobile: new FormControl(),
      uaddress: new FormControl()
    });
  }

  ngOnInit() {
  }

  register() {
    let response = this.userDetails.value;
    let createJson = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem("userDetails")) : [];
    if (this.userDetails.value.upass === this.userDetails.value.uconpass) {
      if (this.userDetails.value) {
        let data = {
          userName: response.uname,
          name: response.name,
          email: response.uemail,
          userType: response.usertype,
          password: response.upass,
          mobileNo: response.umobile,
          address: response.uaddress
        }
        createJson.push(data);
      }
      localStorage.setItem("userDetails", JSON.stringify(createJson));
      alert("Registerd Successfully");
    } else {
      alert("Passwords are not Matching");
    }
  }

  validate(event){
    var k;
    k= event.charCode || event.keyCode;
    return ((k > 63 && k < 91) || (k > 96 && k < 123) || (k >= 48 && k <= 57) || k == 8 || k === 32 || k == 46 || k === 95);
  }
}
