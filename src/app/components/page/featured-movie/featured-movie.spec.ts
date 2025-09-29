import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMovie } from './featured-movie';

describe('FeaturedMovie', () => {
  let component: FeaturedMovie;
  let fixture: ComponentFixture<FeaturedMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
