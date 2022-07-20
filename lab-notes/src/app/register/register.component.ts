import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  
  usuario ={
    email: "",
    password: ""
  }
  constructor(private authService: AuthService) {

  }
  Registrarse(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("se registro", res)
    }) 
   }
 
   obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
   }
  
}