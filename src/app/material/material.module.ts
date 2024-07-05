import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms'

@NgModule({

  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline', floatLabel:'always'}
    }
  ]
})
export class MaterialModule { }
