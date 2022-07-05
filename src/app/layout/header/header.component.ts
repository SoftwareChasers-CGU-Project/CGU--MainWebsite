import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // authenticated: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // const authentication = this.tokenStorage.getToken();
    // if (authentication) {
    //   this.authenticated = true;
    // }

    // this.isLoggedIn ==!this.tokenStorage.getToken();
    // if (this.isLoggedIn) {
    //   this.isLoggedIn = true;
    // }

   
     
    
  }

  logout(): void {
    localStorage.removeItem('token');
    // this.router.navigateByUrl('');
    this.tokenStorage.logout();
    this._snackBar.open("You LoggedOut Successfully");
  }

  
  isLogged(){
    
    if(localStorage.getItem('token') != null)
    this.isLoggedIn=true;
    return this.isLoggedIn;
    // console.log(this.isLoggedIn +" hiii")
  }
}

