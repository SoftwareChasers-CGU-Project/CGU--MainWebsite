import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;



  selectedLang='';
  siteLanguage = 'English';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'සිංහල' },
    { code: 'ta', label: 'தமிழ்' }
  ];
  constructor(private translate: TranslateService,private tokenStorage: TokenStorageService,private _snackBar: MatSnackBar) { }


  ngOnInit(): void {

    this.selectedLang=localStorage.getItem('Lang')||'en';
    this.changeSiteLanguage(this.selectedLang);

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

  changeSiteLanguage(localeCode: string): void {
      localStorage.setItem('Lang',localeCode);
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  // authenticated: boolean = false;
  }

  
}

