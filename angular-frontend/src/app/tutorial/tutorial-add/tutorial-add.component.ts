import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { Tutorial } from '../model';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent implements OnInit {

  public tutorial:Tutorial=new Tutorial();


  constructor(private tutorialService: TutorialService, private router:Router) { }

  ngOnInit(): void {
  }

  public createTutorial():void{
    this.tutorialService.createTutorial(this.tutorial)
    .subscribe(response=>{
      if(response){
        this.router.navigate(['/tutorial/list']);
      } else{
        console.log(response);
      }
    });
  }



}
