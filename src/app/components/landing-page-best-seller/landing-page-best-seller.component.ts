import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-landing-page-best-seller',
  templateUrl: './landing-page-best-seller.component.html',
  styleUrls: ['./landing-page-best-seller.component.css']
})
export class LandingPageBestSellerComponent implements OnInit {

  librosBestSellers: Libro[];

  constructor(private api: ApiService, private carro: ListaLibrosService) { }

  ngOnInit() {
    return this.api.getBestSellers().subscribe((res: any) => this.librosBestSellers = res.items);
  }

  pasarValor(value: Libro) {
    this.carro.agregarAlCarro(value);
  }

}
