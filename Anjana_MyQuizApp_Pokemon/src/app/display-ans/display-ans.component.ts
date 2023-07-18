import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-display-ans',
  templateUrl: './display-ans.component.html',
  styleUrls: ['./display-ans.component.css']
})
export class DisplayAnsComponent implements OnInit {

  public name: string = "";

  public questionList: any = [];

  public currentQuesNum: number = 0;




  constructor(private questionService: QuestionService) { }




  ngOnInit(): void {
    this.getEveryQ();

    this.name = this.capitalizeFirstLetter(localStorage.getItem("name")!);

  }

  getEveryQ() {
    this.questionService.getAllQuestionsJson().subscribe(res => {
      this.questionList = res.questions;
    })
  }


  // user-defined method
  // ---> for name
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  //-----





}
