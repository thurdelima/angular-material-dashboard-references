import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  imports: [
    MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule

  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
