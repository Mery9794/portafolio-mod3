import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acercademi1Component } from './acercademi1.component';

describe('Acercademi1Component', () => {
  let component: Acercademi1Component;
  let fixture: ComponentFixture<Acercademi1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acercademi1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acercademi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
