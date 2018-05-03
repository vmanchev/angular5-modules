import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FancyButtonComponent
  ],
  declarations: [
    FancyButtonComponent
  ]
})
export class DemoUIModule { }
