import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLogoComponent } from './shared-logo/shared-logo.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';



@NgModule({
  declarations: [SharedLogoComponent, SharedButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedLogoComponent, SharedButtonComponent]
})
export class SharedModule { }
