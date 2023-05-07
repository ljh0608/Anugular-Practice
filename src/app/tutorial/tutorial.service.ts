import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';
 import {Tutorial} from './model';
import { catchError, tap, map } from 'rxjs';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';


const baseUrl="http://localhost:8060/api/tutorial";
@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  constructor(private http:HttpClient) { }

  public getTutorialList(): Observable<Tutorial[]>{

    return this.http.get<Tutorial[]>(baseUrl);
  }

  public getTutorial(id:string): Observable<Tutorial>{

    return this.http.get(`${baseUrl}/${id}`);
  }

  //search by keyword
  public searchTutorial(strIndex:string):Observable<Tutorial>{
    console.log("정상작동");
      return this.http.get(`${baseUrl}/${strIndex}`);

        // 일단 보류
     //return this.http.get<Tutorial[]>(`${baseUrl}/?title=${keyword}`);
    //  return this.http.get(`${baseUrl}/${num}`);

  }

  public createTutorial(data:Tutorial): Observable<any>{
    return this.http.post(baseUrl,data);
  }


  public updateTutorial(id: string, data: Tutorial):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public deleteTutorial(id:string):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }




}
