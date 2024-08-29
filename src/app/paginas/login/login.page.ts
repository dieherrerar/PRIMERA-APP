import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre:string=""
  usuario:string=""
  contrasenna:string=""

  constructor(public mensaje:ToastController, private route:Router, public alerta:AlertController) { }

  async Exito() {
    const toast = await this.mensaje.create({
      message: 'Inicio de sesión exitoso',
      duration: 2000
    });
    toast.present();
  }


  async Alerta() {
    const alert = await this.alerta.create({
      header: 'Error',
      message: 'Los campos no deben estar vacios.',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  ingresar(){

    if(this.usuario==="" && this.contrasenna===""){
      console.log("Los campos no deben estar vacios")
      this.Alerta()
    }
    else{
      console.log("Inicio de sesión exitoso")
      this.Exito()
      this.route.navigate(["/inicio"])
    }
  }

  ngOnInit() {
  }

}
