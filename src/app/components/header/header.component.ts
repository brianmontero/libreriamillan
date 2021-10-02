import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  librosContador: number = 0;

  constructor(private carro: ListaLibrosService) { }

  ngOnInit(): void {
    this.carro.adquirirProductos().subscribe((res: Libro[]) => {
      this.librosContador = res.length;
    })
  }

}
