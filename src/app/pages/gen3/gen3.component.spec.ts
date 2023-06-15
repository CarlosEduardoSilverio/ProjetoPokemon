import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen3Component } from './gen3.component';

describe('Gen3Component', () => {
  let component: Gen3Component;
  let fixture: ComponentFixture<Gen3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gen3Component]
    });
    fixture = TestBed.createComponent(Gen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
