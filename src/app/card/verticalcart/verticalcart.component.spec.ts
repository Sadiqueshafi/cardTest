import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalcartComponent } from './verticalcart.component';

describe('VerticalcartComponent', () => {
  let component: VerticalcartComponent;
  let fixture: ComponentFixture<VerticalcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
