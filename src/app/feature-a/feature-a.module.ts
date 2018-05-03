import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoUIModule } from '../demo-ui/demo-ui.module';
import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a/feature-a.component';

@NgModule({
  imports: [
    CommonModule,
    DemoUIModule,
    FeatureARoutingModule,
  ],
  declarations: [FeatureAComponent]
})
export class FeatureAModule { }
