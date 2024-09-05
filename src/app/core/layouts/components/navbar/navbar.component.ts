import { Component, Inject, OnInit } from '@angular/core';
import { ScreenUtils } from '../../../utils/screen-utils';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private screenUtils: ScreenUtils, public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  pushMenu() {
    this.screenUtils.pushMenu();
  }

  signOut() {
    const dialogRef = this.dialog.open(SignOutDialog, {
      width: "560px",
    });
  }
}

@Component({
  selector: 'sign-out-dialog',
  templateUrl: './dialog/sign-out.dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class SignOutDialog {
  constructor(
    public dialogRef: MatDialogRef<SignOutDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _snackBar: MatSnackBar,
  ) {

  }
}
