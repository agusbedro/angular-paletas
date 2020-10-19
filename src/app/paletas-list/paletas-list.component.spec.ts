import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletasListComponent } from './paletas-list.component';

describe('PaletasListComponent', () => {
  let component: PaletasListComponent;
  let fixture: ComponentFixture<PaletasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
