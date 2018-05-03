import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoUIModule } from '../demo-ui/demo-ui.module';
import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b/feature-b.component';

@NgModule({
  imports: [
    CommonModule,
    DemoUIModule,
    FeatureBRoutingModule
  ],
  declarations: [FeatureBComponent]
})
export class FeatureBModule { }
