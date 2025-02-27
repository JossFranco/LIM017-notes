import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register(email: string,password: string){
    try { 
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err){
      console.log('error en register',err)
      return null;
    }
  }
  async login(email: string,password: string){
    try { 
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err){
      console.log('error en login',err)
      return null;
    }
  }

  async loginWhitGoogle(email: string,password: string){
    try { 
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err){
      console.log('error en login con google',err)
      return null;
    }
  }
  getUserLogged(){
    return this.afauth.authState;
  }
  logout(){
    this.afauth.signOut();
  }
}
