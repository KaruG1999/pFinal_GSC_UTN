import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonlitBox } from './moonlit-box';

describe('MoonlitBox', () => {
  let component: MoonlitBox;
  let fixture: ComponentFixture<MoonlitBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonlitBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonlitBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
