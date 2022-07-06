import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/services/programs.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterEventComponent } from '../register-event/register-event.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css'],
})
export class ViewProgramComponent implements OnInit {
  programId: String = '';
  programDetails: any;
  isPastDate: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private ProgramsService: ProgramsService,
    private activatedRoute: ActivatedRoute,
    private MatDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.programId = data.programId;
    });

    this.ProgramsService.viewProgram(this.programId).subscribe((data) => {
      this.programDetails = data;
      var dateNow = Date.now();
      var sessionDate = Math.floor(
        new Date(this.programDetails[0].programDate).getTime()
      );
      if (dateNow > sessionDate) {
        this.isPastDate = true;
      }
    });

    var shouldOpenRegisterDialog =
      window.sessionStorage.getItem('openRegDialog');
    if (shouldOpenRegisterDialog) {
      this.onOpenDialogClick();
      window.sessionStorage.setItem('openRegDialog', "");
    }
  }

  onOpenDialogClick() {
    if (localStorage.getItem('token') == null) {
      var locationPath = '/programs/viewprogram/' + this.programId;
      window.sessionStorage.setItem('path', locationPath);
      window.sessionStorage.setItem('openRegDialog', 'yes');
      this.router.navigateByUrl('/login');
    } else {
      this.MatDialog.open(RegisterEventComponent, {
        width: '500px',
        data: this.programId,
      });
    }
  }

  // isLogged(){

  //   if(localStorage.getItem('token') != null)
  //   this.isLoggedIn=true;
  //   return this.isLoggedIn;

  // }
}
