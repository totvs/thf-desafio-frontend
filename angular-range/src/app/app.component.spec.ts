import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularSliderComponent } from './angular-slider/angular-slider.component';
import { AngularSliderComplexComponent } from './angular-slider-complex/angular-slider-complex.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AngularSliderComponent,
        AngularSliderComplexComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
