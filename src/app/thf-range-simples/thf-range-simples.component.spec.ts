import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfRangeSimplesComponent } from './thf-range-simples.component';

describe('ThfRangeSimplesComponent', () => {
  let component: ThfRangeSimplesComponent;
  let fixture: ComponentFixture<ThfRangeSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfRangeSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfRangeSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
