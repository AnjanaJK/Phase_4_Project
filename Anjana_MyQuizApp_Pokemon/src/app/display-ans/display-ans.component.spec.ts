import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAnsComponent } from './display-ans.component';

describe('DisplayAnsComponent', () => {
  let component: DisplayAnsComponent;
  let fixture: ComponentFixture<DisplayAnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAnsComponent]
    });
    fixture = TestBed.createComponent(DisplayAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
