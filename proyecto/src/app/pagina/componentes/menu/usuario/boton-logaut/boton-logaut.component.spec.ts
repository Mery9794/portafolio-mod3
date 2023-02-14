import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLogautComponent } from './boton-logaut.component';

describe('BotonLogautComponent', () => {
  let component: BotonLogautComponent;
  let fixture: ComponentFixture<BotonLogautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonLogautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonLogautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
