import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  public message: string = '';

  constructor(private dialog: MatDialog) {}

  public openDialog() {
    const dialogRef =  this.dialog.open(DialogModalComponent, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        animal: 'panda',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.message = result;
    })
  }

}
