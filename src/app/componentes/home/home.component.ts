import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWelcomeComponent } from '../shared/modal-welcome/modal-welcome.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalWelcomeComponent);

    dialogRef.afterClosed().subscribe((response: boolean) => {
      console.log(response);
    });
  }
}
