import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionComponent } from './mention/mention.component';



@NgModule({
  declarations: [MentionComponent],
  imports: [
    CommonModule
  ],
  exports: [MentionComponent]
})
export class MentionModule { }
