import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>) {}

  ngOnInit(): void {


  }

  public closeDialog() {
    this.matDialogRef.close();
  }

}
