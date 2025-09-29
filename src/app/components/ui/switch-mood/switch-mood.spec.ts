import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMood } from './switch-mood';

describe('SwitchMood', () => {
  let component: SwitchMood;
  let fixture: ComponentFixture<SwitchMood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
