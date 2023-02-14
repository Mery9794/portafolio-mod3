import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educacion1Component } from './educacion1.component';

describe('Educacion1Component', () => {
  let component: Educacion1Component;
  let fixture: ComponentFixture<Educacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Educacion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
