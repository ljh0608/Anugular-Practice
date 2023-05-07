import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {TutorialListComponent} from './tutorial-list/tutorial-list.component';
import {TutorialDetailComponent} from './tutorial-detail/tutorial-detail.component';
import {TutorialAddComponent} from './tutorial-add/tutorial-add.component';
 
import {TutorialService} from './tutorial.service';


@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
   
      {
        path: 'tutorial/list',
        component: TutorialListComponent
      },
      {
        path:'tutorial/add',
        component: TutorialAddComponent
      },  
   
      {
        path: 'tutorial/:id',
        component: TutorialDetailComponent
      },
  
      {
        path: '',
        redirectTo: 'tutorial/list',
        pathMatch: 'full'
      },
  
  

    ])
  ],
  declarations: [
    TutorialDetailComponent,
    TutorialAddComponent,
    TutorialListComponent
  ],

  providers:[
    TutorialService
  ]
})
export class TutorialModule { }
