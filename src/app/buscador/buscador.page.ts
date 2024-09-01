import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  items: Array<{ title: string; link: string }> = [];
  filteredItems: Array<{ title: string; link: string }> = [];

  constructor() {}

  ngOnInit() {
    // Inicializar la lista de elementos
    this.items = [
      { title: 'Publicación 1', link: '/publicacion/1' },
      { title: 'Publicación 2', link: '/publicacion/2' },
      { title: 'Perfil 1', link: '/perfil/1' },
      { title: 'Perfil 2', link: '/perfil/2' },
    ];

    // Inicializar los elementos filtrados
    this.filteredItems = this.items;
  }

  onSearch(event: any) {
    const query = event.detail.value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(query)
    );
  }
}
