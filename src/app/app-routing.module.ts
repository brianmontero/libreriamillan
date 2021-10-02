import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaAvanzadaPageComponent } from './pages/busqueda-avanzada-page/busqueda-avanzada-page.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'about', component: SobreNosotrosComponent },
  { path: 'carro', component: CarritoComponent },
  { path: 'busqueda-avanzada', component: BusquedaAvanzadaPageComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'search/:id', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
