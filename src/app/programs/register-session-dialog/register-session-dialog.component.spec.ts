import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSessionDialogComponent } from './register-session-dialog.component';

describe('RegisterSessionDialogComponent', () => {
  let component: RegisterSessionDialogComponent;
  let fixture: ComponentFixture<RegisterSessionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSessionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
