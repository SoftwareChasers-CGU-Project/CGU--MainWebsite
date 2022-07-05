import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedLang='';
  siteLanguage = 'English';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'Sinhala' },
  ];
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.selectedLang=localStorage.getItem('Lang')||'en';
    this.changeSiteLanguage(this.selectedLang);
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
  }

}
