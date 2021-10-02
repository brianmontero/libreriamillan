import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaBasicaComponent } from './busqueda-basica.component';

describe('BusquedaBasicaComponent', () => {
  let component: BusquedaBasicaComponent;
  let fixture: ComponentFixture<BusquedaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaBasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
