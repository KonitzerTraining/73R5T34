import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpIndexComponent } from './help-index.component';

const routes: Routes = [
  {
    path: '',
    component: HelpIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
