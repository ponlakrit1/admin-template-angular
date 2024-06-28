import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomDateAdapter } from '../../../core/pipe/adapter/custom-date-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: "th-TH" },
    { provide: MAT_DATE_LOCALE, useValue: "th-TH" },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements OnInit {
  public matcher = new MyErrorStateMatcher();

  public form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthdate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    acceptTerms1: new  FormControl('1', [Validators.required]),
    acceptTerms2: new FormControl(false),
  });

  public dropdownOptions: any[] = [
    {value: 'M', label: 'Male'},
    {value: 'F', label: 'Female'},
    {value: 'O', label: 'Other'},
  ];
  
  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onTab() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    }

    const dialogRef = this.dialog.open(InsertSampleDialog, {
      data: "Test text", // Send to dialog
      width: "560px",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'insert-sample-dialog',
  templateUrl: './dialog/insert-sample.dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class InsertSampleDialog {
  constructor(
    public dialogRef: MatDialogRef<InsertSampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _snackBar: MatSnackBar,
  ) {

  }

  onNoClick(): void {
    this._snackBar.open('On tap OK!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snackbar-success'],
    });

    this.dialogRef.close();
  }
}
