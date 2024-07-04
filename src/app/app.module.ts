import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';

@NgModule({
  declarations: [		
    AppComponent,
      ButtonsIconsComponent,
      FormFieldInputComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
