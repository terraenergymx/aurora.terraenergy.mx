import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  public email!: string;
  public password!: string;

  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    console.log('Login form submitted:', loginForm.value);
  }
}
