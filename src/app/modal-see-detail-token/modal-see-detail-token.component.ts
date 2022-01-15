import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Wallet } from '../models/wallet';

@Component({
  selector: 'app-modal-see-detail-token',
  templateUrl: './modal-see-detail-token.component.html',
  styleUrls: ['./modal-see-detail-token.component.scss']
})
export class ModalSeeDetailTokenComponent implements OnInit {
  @Input() wallet: Wallet;

  constructor( public activeModal: NgbActiveModal, public db: AngularFireDatabase,private router: Router) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  deleteCrypto(index: any){
    // console.log(index);
    let stop = false;
    if (!stop){
      this.db.object('cryptoList/' + index).remove();
      setTimeout(() => {
        const currentRoute = this.router.url;

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentRoute]); // navigate to same route
        });
      },1500);
      stop = true;
    }

  }

}
