import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginComponent} from '../dialogs/login/login.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  url = "http://httpbin.org/post"
  constructor(public dialog: MatDialog, public http: HttpClient) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result.value);
      this.http.post(this.url,result.value).toPromise().then(data => {
        console.log('aaaaaaaaaaa',data)
      })
    });
  }

}
