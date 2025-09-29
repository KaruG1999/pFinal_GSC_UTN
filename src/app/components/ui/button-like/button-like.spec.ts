import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLike } from './button-like';

describe('ButtonLike', () => {
  let component: ButtonLike;
  let fixture: ComponentFixture<ButtonLike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
