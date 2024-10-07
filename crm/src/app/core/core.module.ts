import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    ErrorBoxComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorBoxComponent,
    LoadingIndicatorComponent
  ]
})
export class CoreModule { }
