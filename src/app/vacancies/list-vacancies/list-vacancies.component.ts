import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { VacancyService } from 'src/app/services/vacancy.service';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

// export interface PeriodicElement {
//   name: string;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   { name: 'Helium', weight: 4.0026, symbol: 'He'},
//   { name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   { name: 'Boron', weight: 10.811, symbol: 'B'},
//   { name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   { name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   { name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.css']
})
export class ListVacanciesComponent implements OnInit {
  
  // columns = [
    
  //   {
  //     columnDef: 'CompanyName',
  //     header: 'Company Name',
  //     cell: (element: PeriodicElement) => `${element.name}`,
  //   },
  //   {
  //     columnDef: 'companyEmail',
  //     header: 'Company Email',
  //     cell: (element: PeriodicElement) => `${element.weight}`,
  //   },
  //   {
  //     columnDef: 'vacancyTitle',
  //     header: 'Vacancy Title',
  //     cell: (element: PeriodicElement) => `${element.symbol}`,
  //   },
  // ];
  // dataSource = ELEMENT_DATA;
  // displayedColumns = this.columns.map(c => c.columnDef);
  listVacancies : any = [];
  acceptedvacancies: any = [];
  
  constructor(private activatedRoute: ActivatedRoute,private VacancyService : VacancyService) { }

  ngOnInit(): void {
  
    this.VacancyService.listAcceptedVacancies().subscribe(data =>{
      this.acceptedvacancies = data as String[];
      console.log(this.acceptedvacancies);
      console.log(this.acceptedvacancies.data.length);
    });
      
      // console.log(this.acceptedvacancies);
      // this.vacancyStatus = data.VacancyStatus;
      // if(this.data.VacancyStatus)
      // this.acceptedvacancies =  data;

      // this.number =  data as String[];
      
    
    }
  }


