import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
logouth(){
  this.authService.logout();
}
}
