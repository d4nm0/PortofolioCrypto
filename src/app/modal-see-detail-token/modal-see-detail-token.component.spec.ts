import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeeDetailTokenComponent } from './modal-see-detail-token.component';

describe('ModalSeeDetailTokenComponent', () => {
  let component: ModalSeeDetailTokenComponent;
  let fixture: ComponentFixture<ModalSeeDetailTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSeeDetailTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeeDetailTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
