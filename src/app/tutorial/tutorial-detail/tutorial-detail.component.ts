import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Tutorial} from '../model';
import { TutorialService } from '../tutorial.service';
import { Tutorials } from '../tutorial.value';
// import {Tutorials}from '../tutorial.value';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent implements OnInit {

  public tutorial:Tutorial=new Tutorial();

  constructor(private tutorialService:TutorialService, 
    private route: ActivatedRoute,
    private router:Router) {
  
     }

  ngOnInit(): void {
  this.getTutorial(this.route.snapshot.params['id']);

  }

public getTutorial(id:string):void{
  this.tutorialService.getTutorial(id).subscribe(
    response=>{
      if(response){
        this.tutorial=response;
      }
      else{
        console.log(response);
      }
    }
  );
}

public updateTutorial():void{
  if(!this.tutorial.id){
    return ;
  }
  this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial)
  .subscribe(response =>{
    if(response){
      this.router.navigate(['tutorial/list']);
    }else{
      console.log(response);
    }
  });
}

public deleteTutorial():void{
  if(!this.tutorial.id){
    return ;
  }
  this.tutorialService.deleteTutorial(this.tutorial.id).subscribe(
    response=>{
      if(response){
        this.router.navigate(['/tutorial/list']);
      } else{
        console.log(response);
      }
    }
  );
}

public updatePublished(status: boolean):void
{
  if(!this.tutorial.id){
    return ;
  } 

  this.tutorialService.updateTutorial(this.tutorial.id, this.tutorial)
  .subscribe( response=> {
    if(response){
      this.tutorial.published=status;
    } else{
      console.log(response);
    }
  });
  
}


}
