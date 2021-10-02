import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-landing-page-educativos',
  templateUrl: './landing-page-educativos.component.html',
  styleUrls: ['./landing-page-educativos.component.css']
})
export class LandingPageEducativosComponent implements OnInit {

  librosEducativos: Libro[];

  constructor(private api: ApiService, private carro: ListaLibrosService) { }

  ngOnInit() {
    return this.api.getEducative().subscribe((res: any) => this.librosEducativos = res.items);
  }

  pasarValor(value: Libro) {
    this.carro.agregarAlCarro(value);
  }

}
