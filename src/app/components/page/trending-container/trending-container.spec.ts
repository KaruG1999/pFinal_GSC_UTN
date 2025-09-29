import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingContainer } from './trending-container';

describe('TrendingContainer', () => {
  let component: TrendingContainer;
  let fixture: ComponentFixture<TrendingContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
