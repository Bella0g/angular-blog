import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactBtnComponent } from './react-btn.component';

describe('ReactBtnComponent', () => {
  let component: ReactBtnComponent;
  let fixture: ComponentFixture<ReactBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactBtnComponent]
    });
    fixture = TestBed.createComponent(ReactBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
