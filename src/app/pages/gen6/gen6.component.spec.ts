import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen6Component } from './gen6.component';

describe('Gen6Component', () => {
  let component: Gen6Component;
  let fixture: ComponentFixture<Gen6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen6Component]
    });
    fixture = TestBed.createComponent(Gen6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
