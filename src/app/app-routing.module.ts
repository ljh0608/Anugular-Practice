import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TutorialModule} from './tutorial/tutorial.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => TutorialModule  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
