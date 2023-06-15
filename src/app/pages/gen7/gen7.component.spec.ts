import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen7Component } from './gen7.component';

describe('Gen7Component', () => {
  let component: Gen7Component;
  let fixture: ComponentFixture<Gen7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen7Component]
    });
    fixture = TestBed.createComponent(Gen7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
