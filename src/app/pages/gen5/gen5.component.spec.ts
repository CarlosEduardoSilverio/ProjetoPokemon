import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen5Component } from './gen5.component';

describe('Gen5Component', () => {
  let component: Gen5Component;
  let fixture: ComponentFixture<Gen5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen5Component]
    });
    fixture = TestBed.createComponent(Gen5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
