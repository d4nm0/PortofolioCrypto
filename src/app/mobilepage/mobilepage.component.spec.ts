import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilepageComponent } from './mobilepage.component';

describe('MobilepageComponent', () => {
  let component: MobilepageComponent;
  let fixture: ComponentFixture<MobilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
