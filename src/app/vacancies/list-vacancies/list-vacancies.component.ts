import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { VacancyService } from 'src/app/services/vacancy.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-vacancies',
  templateUrl: './list-vacancies.component.html',
  styleUrls: ['./list-vacancies.component.css']
})
export class ListVacanciesComponent implements OnInit {
  selectedValue = String;
  vacancytype : String = "false";
  acceptedvacancies: any = [];
  // Governmentvacancies: any = [];
  // Privatevacancies: any = [];
  // NGOvacancies: any = [];
  // Volunteervacancies: any = [];
  // Internshipvacancies: any = [];
  filterVacancyForm :FormGroup = new FormGroup({});
  
  
  
  constructor(private activatedRoute: ActivatedRoute, private VacancyService : VacancyService, private formBuilder: FormBuilder) { }

  // vacancyTypes: vacancyType[] = [
  //   {value: '0', viewValue: 'Government'},
  //   {value: '1', viewValue: 'Private'},
  //   {value: '2', viewValue: 'NGO'},
  //   {value: '3', viewValue: 'Volunteer'},
  //   {value: '4', viewValue: 'Internship'}
  // ];

  ngOnInit(): void {
    this.filterVacancyForm = this.formBuilder.group({
      'vacancyType': new FormControl(''),
    })
    if(this.vacancytype == "false"){
      console.log(this.vacancytype);
      this.VacancyService.listAcceptedVacancies().subscribe(data =>{
        this.acceptedvacancies = data as String[];
      });
    }
    }

  filterVacancy(){
    console.log("hi");
    console.log(this.filterVacancyForm.value);
    this.vacancytype = this.filterVacancyForm.value['vacancyType']; 
    console.log(this.vacancytype);  
    this.VacancyService.listVacanciesbyType(this.vacancytype).subscribe(data =>{
      this.acceptedvacancies = data as String[];
      console.log(this.acceptedvacancies);
    });
  }

}


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


   
      // console.log(this.acceptedvacancies);
      // this.vacancyStatus = data.VacancyStatus;
      // if(this.data.VacancyStatus)
      // this.acceptedvacancies =  data;

      // this.number =  data as String[];
      
    