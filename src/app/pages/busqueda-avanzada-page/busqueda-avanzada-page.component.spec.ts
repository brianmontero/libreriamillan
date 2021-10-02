import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAvanzadaPageComponent } from './busqueda-avanzada-page.component';

describe('BusquedaAvanzadaPageComponent', () => {
  let component: BusquedaAvanzadaPageComponent;
  let fixture: ComponentFixture<BusquedaAvanzadaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaAvanzadaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAvanzadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
