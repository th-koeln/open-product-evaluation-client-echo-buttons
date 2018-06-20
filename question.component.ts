import { Component, OnInit, Input} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataService} from '../data.service';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

import { Survey, Query, Question, Owner, Images, Vote} from '../types';
import {ArrayProjectQuery} from '../question/question.model';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: []
  
})



export class QuestionComponent implements OnInit {
  //[x: string]: any;
  public currentProject: Survey;
  public applicationUser: Survey;

  private currentProjectSub: Subscription;    

 constructor(private apollo: Apollo, private dataService: DataService, private router: Router) 
 {

 }
   public currentPositionQuestion; 
     
  
 
     Arrayproject: Vote []= [];
 
   buttonClick(btn_number)
 {    

     this.Arrayproject.push({_id:btn_number, survey :this.currentProject});
      
      this.dataService.updatePositionQuestion(); 
     //Wurde die letzte Frage erreicht, dann zum Ende gehen
     ((this.currentPositionQuestion + 1) == this.currentProject.questions.length) ? this.router.navigate(['/end']) : this.router.navigate(['/feedback']);
 
     
     }
  
 
 
  
 public ngOnInit(): void {
    
    
 
      console.log("je suis dans la fct init");
       this.currentProject = this.dataService.getSurvey();
       this.currentPositionQuestion = this.dataService.getPositionQuestion();
     console.log("current");
     console.log(this.currentProject);
      this.Arrayproject = this.dataService.getVote();
       console.log(this.Arrayproject);

      }
}


