import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  montantachat: number;
  PriceMtn: any;
  MonBTCMontant: number;
  montantachatBTC: number;
  EURmontant: number;
  CryptoName: Array<any> = [];
  selectToken: string;
  Amount: 0;
  montantachatCrypto: number;
  valuetoken: any;
  cryptoWallet: Array<any> = [];
  jsonString: string;
  montantTotal = 0;
  montantTotalDef: number;
  email: any;
  password: any;
  NewUseremail: any;
  NewUserpassword: any;
  userEmail: string;

  constructor(private http : HttpClient, public db: AngularFireDatabase, private router: Router, public afAuth: AngularFireAuth, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    // this.http.get('https://api.nomics.com/v1/currencies/ticker?key=eb2ee570072c49c57d6f54c3f7a5cabb&ids=BTC&interval=1d&convert=EUR')
    // .subscribe(Response => {
    //   if(Response){
    //     console.log(Response)
    //   }

    //   /// pour convertir le montant euros en btc
    //   this.montantachat = 50;
    //   console.log(this.montantachat);
    //   console.log(Response[0].price);
    //   this.PriceMtn = Response[0].price;

    //   this.MonBTCMontant = this.montantachat / this.PriceMtn;

    //   console.log(this.MonBTCMontant);


    //   /// pour convertir le montant btc en eur
    //   this.montantachatBTC = 0.001;
    //   console.log(this.montantachatBTC);
    //   this.EURmontant = this.montantachatBTC * this.PriceMtn;
    //   console.log(this.EURmontant);
    // });

    // console.log(localStorage.getItem('user'));
    // console.log('ici');
    this.db.list('cryptoList', ref => ref.orderByChild('user').equalTo(localStorage.getItem('user')))
      .valueChanges()
      .subscribe(r => {
        this.cryptoWallet = r;
        // console.log(this.cryptoWallet);
        setInterval(() => {
          // this.montantTotal = 0;
        r.forEach((crypto: any) => {
          if (crypto) {
          this.http.get('https://api.nomics.com/v1/currencies/ticker?key=eb2ee570072c49c57d6f54c3f7a5cabb&ids=' + crypto.cryptoName +'&interval=1d,7d,30d&convert=EUR')
          .subscribe(Response => {
            let stop = false
            if(Response){


              this.PriceMtn = parseFloat(Response[0].price);
              this.EURmontant = crypto.amount * this.PriceMtn;
              this.jsonString = JSON.stringify(crypto);
              crypto["montant"] = this.EURmontant.toFixed(2);
              crypto["Price"] = this.PriceMtn.toFixed(4);
              // this.montantTotal += this.EURmontant;

              setTimeout(() => {
              this.http.get('https://api.nomics.com/v1/currencies/ticker?key=7bf8922c345ff770ff884abd97792553&ids=' + crypto.cryptoName +'&interval=1d,7d,30d&convert=EUR')
              .subscribe(Response => {
                if(Response){
                  if (Response[0]['1d'] && Response[0]['7d'] && Response[0]['30d']) {
                    crypto["PriceMovement1d"] = (Response[0]['1d'].price_change_pct * 100).toFixed(2);
                    crypto["PriceMovement7d"] = (Response[0]['7d'].price_change_pct * 100).toFixed(2);
                    crypto["PriceMovement30d"] = (Response[0]['30d'].price_change_pct * 100).toFixed(2);
                    crypto = JSON.stringify(crypto);
                  }
                }
              });
            },1500);
            }
            if (!stop){
              // this.montantTotalDef = parseFloat(this.montantTotal.toFixed(2));
              stop = true;
            }

          });

        }

        });


      }, 1500);
      });

    this.http.get<any>('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
    .subscribe(data => {
      if(data){
        this.CryptoName = data;
        // console.log(this.CryptoName);
      }
    });
    this.userEmail = localStorage.getItem('email');
  }

  sendNewUser(){
    this.authenticationService.SignUp(this.NewUseremail, this.NewUserpassword)
  }

  LoginUser(){
    this.authenticationService.SignIn(this.email, this.password)
  }

  receivinfo(){
    this.montantachatCrypto = this.Amount;
    this.http.get('https://api.nomics.com/v1/currencies/ticker?key=eb2ee570072c49c57d6f54c3f7a5cabb&ids=' +this.selectToken.toUpperCase() +'&interval=1d&convert=EUR')
    .subscribe(Response => {
      if(Response){
        this.PriceMtn = Response[0].price;
      }
    });
    this.EURmontant = this.montantachatCrypto * this.PriceMtn;
    this.SendCrypto();
  }

  SendCrypto(){
    let stop = false;
    // console.log(this.Amount);
    // console.log(this.selectToken.toUpperCase());
    if (
      this.Amount !== 0 &&
      this.selectToken.toUpperCase() !== ''
    ){
      this.db
      .list('cryptoList', ref =>
        ref.orderByChild('crypto_id').limitToLast(1)
      )
      .valueChanges()
      .subscribe(cryptoId => {
        if (!stop) {
          console.log(cryptoId);
          this.valuetoken = cryptoId;
          // tslint:disable-next-line: no-string-literal
          const id = this.valuetoken[0].crypto_id + 1;
          // console.log(id);

          this.db.object('cryptoList/' + id).set({
            user: localStorage.getItem('user'),
            crypto_id: id,
            cryptoName: this.selectToken.toUpperCase(),
            amount: this.Amount,
          });
          this.Amount = 0;
          this.selectToken = '';
          stop = true;
        }
      });
    }
    setTimeout(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentRoute]); // navigate to same route
      });
    },1500);
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

  logOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
