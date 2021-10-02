import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-landing-page-novedades',
  templateUrl: './landing-page-novedades.component.html',
  styleUrls: ['./landing-page-novedades.component.css']
})
export class LandingPageNovedadesComponent implements OnInit {

  librosNovedades: Libro[];

  constructor(private api: ApiService, private libroLista: ListaLibrosService) { }

  ngOnInit() {
    this.api.getNewest().subscribe((res: any) => this.librosNovedades = res.items);
  }

  pasarValor(libro: Libro) {
    this.libroLista.agregarAlCarro(libro);
  }

}
