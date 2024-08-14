import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    // this.snackBar.open('hello people', 'close', {
    //   duration: 2000
    // })
  }


  public openSnackBar() {
    const snackBar =  this.snackBar.open('hello people', 'close', {
      duration: 2000
    })

    snackBar.afterDismissed().subscribe(_ => {
      console.log('fechado')
    })


    snackBar.onAction().subscribe(_ => {
      console.log('alguma action')
    })
  }

  public openFromComp() {
    this.snackBar.openFromComponent(SnackbarMsnComponent, {
      data: 'Hello People 123 123',
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })



  }

}
