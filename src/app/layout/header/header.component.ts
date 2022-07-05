import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  ];
  constructor(private translate: TranslateService,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.selectedLang=localStorage.getItem('Lang')||'en';
    this.changeSiteLanguage(this.selectedLang);

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
