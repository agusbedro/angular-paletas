import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCarritoComponent } from './store-carrito.component';

describe('StoreCarritoComponent', () => {
  let component: StoreCarritoComponent;
  let fixture: ComponentFixture<StoreCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
