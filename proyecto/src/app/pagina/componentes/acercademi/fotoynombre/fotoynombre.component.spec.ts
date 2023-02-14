import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoynombreComponent } from './fotoynombre.component';

describe('FotoynombreComponent', () => {
  let component: FotoynombreComponent;
  let fixture: ComponentFixture<FotoynombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoynombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoynombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
