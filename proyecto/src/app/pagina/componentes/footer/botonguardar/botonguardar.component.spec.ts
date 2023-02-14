import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonguardarComponent } from './botonguardar.component';

describe('BotonguardarComponent', () => {
  let component: BotonguardarComponent;
  let fixture: ComponentFixture<BotonguardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonguardarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonguardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
