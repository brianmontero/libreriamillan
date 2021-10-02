import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ListaLibrosService {

  listaCarro: Libro[] = [];
  listaProductos$ = new BehaviorSubject<Libro[]>([]); 

  constructor(private toastrService: ToastrService ) { }

  adquirirProductos() {
    return this.listaProductos$.asObservable();
  }

  agregarAlCarro(producto: Libro) {
    if (!this.listaCarro.includes(producto)) {
      this.listaCarro.push(producto);
      this.listaProductos$.next(this.listaCarro);
      this.precioTotal();
      this.toastrService.success(`${producto.volumeInfo.title} agregado al carro`, 'Entrada al carro');
    }
  }

  precioTotal() {
    let precioTotal: number = 0;
    this.listaCarro.map((items: Libro) => {
      if (items.volumeInfo.pageCount == null || items.volumeInfo.pageCount == undefined) {
        items.volumeInfo.pageCount = 100;
      }

      if (items.volumeInfo.authors == null || items.volumeInfo.authors == undefined) {
        items.volumeInfo.authors = ['Juan Pérez'];
      }

      precioTotal += items.volumeInfo.pageCount;
    });

    return precioTotal
  }

  eliminarLibroDeCarro(producto: Libro) {
    this.listaCarro.map((item, i) => {
      if (producto.id === item.id) {
        this.listaCarro.splice(i, 1);
      }
    }); 
    this.listaProductos$.next(this.listaCarro);
  }

  limpiarCarro() {
    this.listaCarro = [];
    this.listaProductos$.next(this.listaCarro);
  }
}
