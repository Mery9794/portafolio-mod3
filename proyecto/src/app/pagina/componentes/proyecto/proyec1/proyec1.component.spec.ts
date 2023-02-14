import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyec1Component } from './proyec1.component';

describe('Proyec1Component', () => {
  let component: Proyec1Component;
  let fixture: ComponentFixture<Proyec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyec1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
