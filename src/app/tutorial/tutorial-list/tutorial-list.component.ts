import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { filter } from 'rxjs';
import { Tutorial } from '../model';
import {TutorialService} from '../tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  public tutorialList:Tutorial[]=[];
  public tutorial:Tutorial=new Tutorial();
  public keyword:string='';
  public ID:string=''; //ID검색을 위한 변수
  public strId:string='';


  public strIndex:string='';

  constructor(private tutorialService:TutorialService ,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.retrieveTutorialList();
   // this.getTutorial(this.route.snapshot.params['id']);

  }


  //전체조회
  public retrieveTutorialList():void {

    this.tutorialService.getTutorialList()
    .subscribe(response=>{
      // console.log("retrieve"+response);
      if(response){
        
      this.tutorialList=response;
      }
      else{
      console.log(response);
      }
    });
  }
//ID 검색을 통한 개별조회
// public searchIdTutorial():void{
//   this.strId+=this.ID;
//   console.log(this.strId+" "+typeof(this.strId));
//   let validIdIndex:number=this.tutorialList.findIndex(x=>{ 
//     const num=parseInt(this.strId);
//     console.log(x.id +" "+typeof (x.id));
//     'x.id'===this.strId});

//   // if(validIdIndex==-1){
//   //   alert("유효하지 않은 id입니다.");
//   //   this.strId='';
//   // }else{
  
//     this.tutorialService.getTutorial(String(validIdIndex)).subscribe(
//       response=>{
//         if(response){
//           this.router.navigate([`/tutorial/${validIdIndex}`]);
//           this.tutorial= response;
//         }
//         else{
//           console.log("error  "+response);
//         }
//       }
//     )
    
// }


  //title 검색을 통한개별조회 
  public searchTutorial():void{
    const index:number=this.tutorialList.findIndex(x=>x.title===this.keyword);
    console.log(index);
    if(index==-1)
    {alert("없는 게시글입니다");}

    else{
   
    this.strIndex+=this.tutorialList[index].id;
    
    this.tutorialService.getTutorial(this.strIndex).subscribe(
      response=>{
        if(response){ 
          this.router.navigate([`/tutorial/${this.strIndex}`]);
         this.tutorial= response;
      console.log(this.tutorial);
           

        } else{
         
          console.log("error  "+response);
        }
      }
    );
    }
   
  }

}
