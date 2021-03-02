import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-see-detail-token',
  templateUrl: './modal-see-detail-token.component.html',
  styleUrls: ['./modal-see-detail-token.component.scss']
})
export class ModalSeeDetailTokenComponent implements OnInit {
  @Input() wallet: any;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

}
