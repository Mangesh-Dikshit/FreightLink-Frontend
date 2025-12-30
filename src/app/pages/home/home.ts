import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
 selector: 'app-home',
 standalone: true,
 imports: [CommonModule, FormsModule],
 templateUrl: './home.html',
 styleUrls: ['./home.css']
})
export class HomeComponent {
 // toggle
 showLogin = true;
 showRegister = false;
 // login
 loginEmail = '';
 loginPassword = '';
 // register
 name = '';
 email = '';
 contact = '';
 password = '';
 role = '';
 preferredMode = '';
 showRegisterForm() {
   this.showLogin = false;
   this.showRegister = true;
 }
 showLoginForm() {
   this.showRegister = false;
   this.showLogin = true;
 }
 login() {
   if (!this.loginEmail || !this.loginPassword) {
     alert('Please enter email and password');
     return;
   }
   alert('Login successful');
 }
 register() {
   if (
     !this.name ||
     !this.email ||
     !this.contact ||
     !this.password ||
     !this.role ||
     !this.preferredMode
   ) {
     alert('All fields are mandatory');
     return;
   }
   if (this.password.length < 3) {
     alert('Password must be at least 3 characters');
     return;
   }
   alert('Registration successful');
   // clear
   this.name = '';
   this.email = '';
   this.contact = '';
   this.password = '';
   this.role = '';
   this.preferredMode = '';
   this.showLoginForm();
 }
}