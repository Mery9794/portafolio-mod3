import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedlnComponent } from './linkedln.component';

describe('LinkedlnComponent', () => {
  let component: LinkedlnComponent;
  let fixture: ComponentFixture<LinkedlnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedlnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedlnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
