import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-landing-page-novelas',
  templateUrl: './landing-page-novelas.component.html',
  styleUrls: ['./landing-page-novelas.component.css']
})
export class LandingPageNovelasComponent implements OnInit {

  librosNovelas: Libro[];

  constructor(private api: ApiService, private carro: ListaLibrosService) { }

  ngOnInit() {
    return this.api.getNovels().subscribe((res: any) => this.librosNovelas = res.items);
  }

  pasarValor(value: Libro) {
    this.carro.agregarAlCarro(value);
  }

}
