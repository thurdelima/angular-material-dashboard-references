import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss'
})
export class DialogModalComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  ngOnInit(): void {


  }

  public closeDialog() {
    this.matDialogRef.close();
  }

}
