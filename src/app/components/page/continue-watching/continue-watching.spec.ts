import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatching } from './continue-watching';

describe('ContinueWatching', () => {
  let component: ContinueWatching;
  let fixture: ComponentFixture<ContinueWatching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueWatching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueWatching);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
