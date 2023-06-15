import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Gen1Component } from '../gen1/gen1.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // OpenDialog(): void {
  //   const dialogRef = this.dialog.open(DetailsComponent, {
  //     data: {},
  //     width: '1000px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}