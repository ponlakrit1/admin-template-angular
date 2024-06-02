import { Component, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomDateAdapter } from '../../../utils/adapter/custom-date-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  styleUrl: './form-field.component.scss'
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
  
  constructor(private _snackBar: MatSnackBar) {
    
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

    this._snackBar.open('On tap OK!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['snackbar-success'],
    });
  }
  
}
