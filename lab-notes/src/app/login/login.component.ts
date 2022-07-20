import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  
  usuario ={
    email: "",
    password: ""
  }
  ngOnInit(): void {
      
  }
  constructor(private authService: AuthService, private router:Router) {

  }
  Ingresar(){
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Bienvenido",user);
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        return;
      };
      this.router.navigate(['/home'])
    }).catch(err=>{
      console.log(err)
    })
   }
   IngresarConGoogle(){
    const {email, password} = this.usuario;
    this.authService.loginWhitGoogle(email, password).then(res => {
      console.log("se registro", res)
   }) 
   }
   obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
   }
   logout(){
    this.authService.logout();
   }
}