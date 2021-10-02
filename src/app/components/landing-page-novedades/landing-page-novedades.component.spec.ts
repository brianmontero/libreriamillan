import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNovedadesComponent } from './landing-page-novedades.component';

describe('LandingPageNovedadesComponent', () => {
  let component: LandingPageNovedadesComponent;
  let fixture: ComponentFixture<LandingPageNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
