import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage {
  // Ejemplo de datos de publicación para prueba
  publicacion = {
    title: 'Título de Ejemplo',
    image: 'https://via.placeholder.com/600x400', // Imagen de ejemplo
    ingredients: 'Ingredientes de ejemplo',
    steps: 'Pasos de ejemplo',
  };

  likePublication() {
    console.log('Publicación marcada como favorita');
  }

  savePublication() {
    console.log('Publicacion guardada');
  }

  submitComment() {
    console.log('Comentario enviado');
  }
}
