import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul-see',
  templateUrl: './calcul-see.component.html',
  styleUrls: ['./calcul-see.component.scss']
})
export class CalculSeeComponent implements OnInit {
  mobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width) {
      console.log(window.screen.width);
      if (window.screen.width < 780) { // 768px portrait
        this.mobile = true;
      }
    }

  }

}
