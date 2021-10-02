import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNovelasComponent } from './landing-page-novelas.component';

describe('LandingPageNovelasComponent', () => {
  let component: LandingPageNovelasComponent;
  let fixture: ComponentFixture<LandingPageNovelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNovelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNovelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
