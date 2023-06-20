import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.sass'],
})
export class CookieComponent implements OnInit {
  constructor(public cookieService: CookieService) {}

  ngOnInit(): void {
    this.getCookie();
  }

  public getCookie() {
    this.cookieService.getCookie().subscribe(() => {
      console.log('mi cookie');
    });
  }
}
