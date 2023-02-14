import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Habilidades1Component } from './habilidades1.component';

describe('Habilidades1Component', () => {
  let component: Habilidades1Component;
  let fixture: ComponentFixture<Habilidades1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Habilidades1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Habilidades1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
