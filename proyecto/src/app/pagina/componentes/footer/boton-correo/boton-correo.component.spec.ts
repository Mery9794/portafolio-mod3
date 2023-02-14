import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCorreoComponent } from './boton-correo.component';

describe('BotonCorreoComponent', () => {
  let component: BotonCorreoComponent;
  let fixture: ComponentFixture<BotonCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
