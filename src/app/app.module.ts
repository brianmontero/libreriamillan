import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { FooterSubscriptionComponent } from './components/footer-subscription/footer-subscription.component';
import { LandingPageNovedadesComponent } from './components/landing-page-novedades/landing-page-novedades.component';
import { LandingPageBestSellerComponent } from './components/landing-page-best-seller/landing-page-best-seller.component';
import { LandingPageNovelasComponent } from './components/landing-page-novelas/landing-page-novelas.component';
import { LandingPageEducativosComponent } from './components/landing-page-educativos/landing-page-educativos.component';
import { SobreNosotrosDesignComponent } from './components/sobre-nosotros-design/sobre-nosotros-design.component';
import { ListaCarroComponent } from './components/lista-carro/lista-carro.component';
import { BusquedaBasicaComponent } from './components/busqueda-basica/busqueda-basica.component';
import { BusquedaAvanzadaPageComponent } from './pages/busqueda-avanzada-page/busqueda-avanzada-page.component';
import { BusquedaAvanzadaComponent } from './components/busqueda-avanzada/busqueda-avanzada.component';
import { ContactoDesignComponent } from './components/contacto-design/contacto-design.component';

//Servicios
import { ListaLibrosService } from './services/lista-libros.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SobreNosotrosComponent,
    CarritoComponent,
    ContactoComponent,
    BusquedaComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    FooterSubscriptionComponent,
    LandingPageNovedadesComponent,
    LandingPageBestSellerComponent,
    LandingPageNovelasComponent,
    LandingPageEducativosComponent,
    SobreNosotrosDesignComponent,
    ListaCarroComponent,
    BusquedaBasicaComponent,
    BusquedaAvanzadaComponent,
    BusquedaAvanzadaPageComponent,
    ContactoDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ListaLibrosService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
