import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThfRangeComplexoComponent } from './thf-range-complexo.component';

describe('ThfRangeComplexoComponent', () => {
  let component: ThfRangeComplexoComponent;
  let fixture: ComponentFixture<ThfRangeComplexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThfRangeComplexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThfRangeComplexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
