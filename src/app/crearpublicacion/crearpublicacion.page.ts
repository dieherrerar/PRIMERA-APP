import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearpublicacion',
  templateUrl: './crearpublicacion.page.html',
  styleUrls: ['./crearpublicacion.page.scss'],
})
export class CrearpublicacionPage implements OnInit {
  publication: any = {}; // Define el objeto publication

  constructor() { }

  ngOnInit() {
  }

  submitPublication() {
    // Lógica para guardar la publicación en localStorage
    const publications = JSON.parse(localStorage.getItem('publications') || '[]');
    publications.push(this.publication);
    localStorage.setItem('publications', JSON.stringify(publications));
    console.log('Publicación guardada:', this.publication);
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.publication.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onVideoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.publication.video = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
