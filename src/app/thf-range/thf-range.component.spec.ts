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

  it('o inicio não pode ser menor que o minimo - caso seja, inicio = minimo.', () => {
    component.minimo = 10;
    component.inicio = 5;
    component.ngOnInit();
    expect(component.inicio).toEqual(component.minimo);
  });

  it('o fim não pode ser maior que o maximo - caso seja, fim = maximo.', () => {
    component.maximo = 5;
    component.fim = 10;
    component.ngOnInit();
    expect(component.fim).toEqual(component.maximo);
  });

  it('caso o inicio não seja informado, inicio = minimo.', () => {
    component.minimo = 0;
    component.ngOnInit();
    expect(component.inicio).toEqual(component.minimo);
  });

  it('caso o fim não seja informado, fim = maximo.', () => {
    component.maximo = 100;
    component.ngOnInit();
    expect(component.fim).toEqual(component.maximo);
  });

  it('caso o minimo e o maximo não forem informados, minimo = 0 e maximo = 100', () => {
    component.ngOnInit();
    expect(component.minimo).toEqual(0);
    expect(component.maximo).toEqual(100);
  });

});
