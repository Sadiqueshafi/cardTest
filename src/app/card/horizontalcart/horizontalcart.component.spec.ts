import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalcartComponent } from './horizontalcart.component';

describe('HorizontalcartComponent', () => {
  let component: HorizontalcartComponent;
  let fixture: ComponentFixture<HorizontalcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
