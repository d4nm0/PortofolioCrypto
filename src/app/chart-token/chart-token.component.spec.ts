import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTokenComponent } from './chart-token.component';

describe('ChartTokenComponent', () => {
  let component: ChartTokenComponent;
  let fixture: ComponentFixture<ChartTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
