import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // authenticated: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    // const authentication = this.tokenStorage.getToken();
    // if (authentication) {
    //   this.authenticated = true;
    // }

    this.isLoggedIn == !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.tokenStorage.logout();
  }
}
