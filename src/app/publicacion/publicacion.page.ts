import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  comentario:string=""

  constructor(public mensaje:ToastController, private route:Router,public alerta:AlertController) { }

  async mensajeLike() {
    const toast = await this.mensaje.create({
      message: 'Publicación añadida a favoritos',
      duration: 2000
    });
    toast.present();
  }
  async MensajeGuardada() {
    const toast = await this.mensaje.create({
      message: 'Publicación guardada',
      duration: 2000
    });
    toast.present();
  }

  async MensajeComentario() {
    const toast = await this.mensaje.create({
      message: 'Comentario Enviado',
      duration: 2000
    });
    toast.present();
  }

  async MensajeComentarioError() {
    const toast = await this.mensaje.create({
      message: 'No se puede enviar un comentario vacío',
      duration: 2000
    });
    toast.present();
  }

  Like(){
    this.mensajeLike()
  }

  Guardado(){
    this.MensajeGuardada()
  }

  Comentar(){
    if(this.comentario===""){
      console.log("No se puede enviar un comentario vacío")
      this.MensajeComentarioError()
    }
    else{
      console.log("Comentario enviado")
      this.MensajeComentario()
    }
  }
  ngOnInit() {
  }
}
