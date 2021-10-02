import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { ListaLibrosService } from 'src/app/services/lista-libros.service';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html',
  styleUrls: ['./lista-carro.component.css']
})
export class ListaCarroComponent implements OnInit {

  librosEnCarro: Libro[] = [];
  precioTotal: number = 0;

  constructor(private libros: ListaLibrosService) { }

  ngOnInit(): void {
    this.libros.adquirirProductos().subscribe((res) => {
      this.librosEnCarro = res;
      this.precioTotal = this.libros.precioTotal();
    })
  }

  eliminarLibro(libro: Libro) {
    this.libros.eliminarLibroDeCarro(libro);
  }

  limpiarCarro() {
    this.libros.limpiarCarro();
  }

  ejecutarCompra() {
    alert(`¿Confirmar la compra de ${this.librosEnCarro.length}` + ` libro(s) por un total de $${this.libros.precioTotal()}?`);
    window.location.reload();
  }

}
