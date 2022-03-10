import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyVacanciesComponent } from './apply-vacancies.component';

describe('ApplyVacanciesComponent', () => {
  let component: ApplyVacanciesComponent;
  let fixture: ComponentFixture<ApplyVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
