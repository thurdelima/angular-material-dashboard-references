import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'


@NgModule({

  exports: [
    MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
