import { TestBed } from '@angular/core/testing';

import { MovieTrendService } from './movie-trend-service';

describe('MovieTrendService', () => {
  let service: MovieTrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
