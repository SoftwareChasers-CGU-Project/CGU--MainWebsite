import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // authenticated: boolean = false;
  isLoggedIn = false;
  logged : any

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.logged =  this.tokenStorage.getToken();
    if (this.logged) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.tokenStorage.logout();
  }
}
