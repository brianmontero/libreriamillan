import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBestSellerComponent } from './landing-page-best-seller.component';

describe('LandingPageBestSellerComponent', () => {
  let component: LandingPageBestSellerComponent;
  let fixture: ComponentFixture<LandingPageBestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageBestSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
