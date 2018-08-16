import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfRangeComponent } from './thf-range.component';

describe('ThfRangeComponent', () => {
  let component: ThfRangeComponent;
  let fixture: ComponentFixture<ThfRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
