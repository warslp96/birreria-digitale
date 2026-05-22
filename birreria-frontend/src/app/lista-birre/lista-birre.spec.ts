import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBirre } from './lista-birre';

describe('ListaBirre', () => {
  let component: ListaBirre;
  let fixture: ComponentFixture<ListaBirre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBirre],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaBirre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
