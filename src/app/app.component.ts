import { Component, OnInit } from '@angular/core';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(public cookieService: CookieService) {}
  ngOnInit(): void {
    this.getCookie();
  }

  public getCookie() {
    this.cookieService.getCookie().subscribe(() => {
      console.log('mi cookie');
    });
  }
  title = 'auth-app';
}
