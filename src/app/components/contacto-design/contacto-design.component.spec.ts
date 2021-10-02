import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDesignComponent } from './contacto-design.component';

describe('ContactoDesignComponent', () => {
  let component: ContactoDesignComponent;
  let fixture: ComponentFixture<ContactoDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
