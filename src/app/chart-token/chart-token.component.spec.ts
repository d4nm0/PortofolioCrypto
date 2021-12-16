import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ChartTokenComponent } from './chart-token.component';

describe('ChartTokenComponent', () => {
  let component: ChartTokenComponent;
  let fixture: ComponentFixture<ChartTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ChartTokenComponent ],
      providers: [ HttpClient ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devrait créer le component', () => {
    expect(component).toBeTruthy();
  });

  it(`Devrait verifier que les variables du component sont initialisées`, () => {
    expect(component.Price).toEqual(undefined)
    expect(component.dataTime).toEqual(undefined)
    expect(component.dataPrice).toEqual(undefined)

  });
});
