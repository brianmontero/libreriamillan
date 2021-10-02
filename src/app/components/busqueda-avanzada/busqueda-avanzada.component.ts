import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ApiService } from 'src/app/services/api.service';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.css']
})
export class BusquedaAvanzadaComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private api: ApiService, private carro: ListaLibrosService) { }

  ngOnInit(): void {

  }

  searchRequest(autor: string) { 
    return this.api.getAutor(autor).subscribe((res: any) => {
      this.libros = res.items;
    });
    
  }

  limpiar(form: any) {
    form.reset();
  }

  pasarValor(valor: Libro) {
    this.carro.agregarAlCarro(valor);
  }

}
