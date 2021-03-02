import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSeeDetailTokenComponent } from '../modal-see-detail-token/modal-see-detail-token.component';

@Component({
  selector: '[app-mobile-line]',
  templateUrl: './mobile-line.component.html',
  styleUrls: ['./mobile-line.component.scss']
})
export class MobileLineComponent implements OnInit {
  @Input() wallet: any;
  data: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  EditToken(e: any) {
    console.log(e);
    const EditToken = this.modalService.open(
      ModalSeeDetailTokenComponent,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: 'sm',
        windowClass: 'lgModal',
      }
    );
    EditToken.componentInstance.wallet = e;
  }

}
