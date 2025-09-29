import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCard1 } from './list-card1';

describe('ListCard1', () => {
  let component: ListCard1;
  let fixture: ComponentFixture<ListCard1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCard1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCard1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
