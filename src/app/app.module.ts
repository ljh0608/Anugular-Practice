import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialAddComponent } from './tutorial/tutorial-add/tutorial-add.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, //브라우저에서 앱이 동작할 때 필요한 인프라를 제공하는 모듈
    AppRoutingModule, //라우팅 관련 디렉티브 밑 모듈
    FormsModule, //폼관련 디렉티브 및 모듈
    HttpClientModule, //http 관련 모듈

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
