import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosDesignComponent } from './sobre-nosotros-design.component';

describe('SobreNosotrosDesignComponent', () => {
  let component: SobreNosotrosDesignComponent;
  let fixture: ComponentFixture<SobreNosotrosDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNosotrosDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosotrosDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
