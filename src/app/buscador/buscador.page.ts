import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  // Lista de elementos de ejemplo
  items: string[] = [
    'Publicación 1',
    'Publicación 2',
    'Perfil 1',
    'Perfil 2',
  ];

  // Lista que se mostrará según el término de búsqueda
  filteredItems: string[] = [];

  constructor() {
    // Al principio, mostramos todos los elementos
    this.filteredItems = this.items;
  }

  // Método para filtrar los elementos según la búsqueda
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    // Si no hay texto en el campo de búsqueda, muestra todos los elementos
    if (!searchTerm) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item =>
        item.toLowerCase().includes(searchTerm)
      );
    }
  }
}
