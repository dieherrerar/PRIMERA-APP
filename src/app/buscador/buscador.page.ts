import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  constructor(private router : Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  ngOnInit() {}


}
