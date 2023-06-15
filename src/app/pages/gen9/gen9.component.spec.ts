import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen9Component } from './gen9.component';

describe('Gen9Component', () => {
  let component: Gen9Component;
  let fixture: ComponentFixture<Gen9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen9Component]
    });
    fixture = TestBed.createComponent(Gen9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
