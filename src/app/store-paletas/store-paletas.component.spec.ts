import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePaletasComponent } from './store-paletas.component';

describe('StorePaletasComponent', () => {
  let component: StorePaletasComponent;
  let fixture: ComponentFixture<StorePaletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePaletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
