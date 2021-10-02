import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-busqueda-basica',
  templateUrl: './busqueda-basica.component.html',
  styleUrls: ['./busqueda-basica.component.css']
})
export class BusquedaBasicaComponent implements OnInit {

  libros: Libro[] = [];
  busqueda: string = "";

  constructor(private api: ApiService, private libro: ListaLibrosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.busqueda = this.route.snapshot.params.id;
    this.ejecutarBusqueda(this.busqueda);
  }

  ejecutarBusqueda(busqueda: string) {
    return this.api.getBooks(busqueda).subscribe((books: any) => {
      this.libros = books.items;  
    })
  }

  pasarValor(valor: Libro) {
    this.libro.agregarAlCarro(valor);
  }

}
