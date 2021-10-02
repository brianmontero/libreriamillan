import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageEducativosComponent } from './landing-page-educativos.component';

describe('LandingPageEducativosComponent', () => {
  let component: LandingPageEducativosComponent;
  let fixture: ComponentFixture<LandingPageEducativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageEducativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageEducativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
