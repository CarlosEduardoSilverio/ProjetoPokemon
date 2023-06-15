import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen2Component } from './gen2.component';

describe('Gen2Component', () => {
  let component: Gen2Component;
  let fixture: ComponentFixture<Gen2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen2Component]
    });
    fixture = TestBed.createComponent(Gen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
