import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  details: any;
  constructor(public route: Router) { }

  ngOnInit() {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    let loggedUserDetails = JSON.parse(localStorage.getItem("loggedDetails"));
    if (loggedUserDetails[0].userType == "Admin") {
      this.details = userDetails;
    } else {
      this.details = loggedUserDetails;
    }
  }

  logout() {
    localStorage.removeItem("loggedDetails");
    this.route.navigate(['/login']);
  }

}
