import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // -----------------------------------------------
  // --------------  VARIABLES  --------------------
  // -----------------------------------------------
  public name: string = "";

  public questionList: any = [];
  public currentQuesNum: number = 0;
  public progress: string = "0";

  public points: number = 0;
  public timer: number = 60;

  public correctAns: number = 0;
  public wrongAns: number = 0;

  public interval: any;

  isQuizCompleted: Boolean = false;



  // -------------------------------------------------
  // --------------  CONSTRUCTOR  --------------------
  // -------------------------------------------------
  constructor(private questionService: QuestionService) { }



  // ---------------------------------------------
  // --------------  METHODS  --------------------
  // ---------------------------------------------
  ngOnInit(): void {
    this.name = this.capitalizeFirstLetter(localStorage.getItem("name")!);

    this.getAllQuestions();

    this.startTimer();
  }

  // user-defined method
  // ---> for name
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  //-----


  // ---> getting all Questions from JSON from Service
  getAllQuestions() {
    // call the method from the service
    this.questionService.getAllQuestionsJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  //-----


  // [Question Buttons]
  goToPrev() {
    this.currentQuesNum--;
  }

  goToNext() {
    this.currentQuesNum++;
  }

  resetQuiz() {
    this.resetTimer();
    this.getAllQuestions();
    this.currentQuesNum = 0;
    this.points = 0;
    this.timer = 60;
    this.progress = "0";
  }
  //-----


  // Is the answer (of that particular question) correct or wrong? 
  answer(currentQuesNum: number, selectedOption: any) {
    if (currentQuesNum === this.questionList.length) {
      this.isQuizCompleted = true;
      console.log(this.isQuizCompleted);
      this.stopTimer();
    }

    if (selectedOption.correct) {
      this.points += 10;
      this.correctAns++;
      setTimeout(() => {
        this.currentQuesNum++;
        this.resetTimer();
        this.getProgressPercentage();
      }, 1000);
    }
    else {
      this.points -= 10;
      this.wrongAns++;
      setTimeout(() => {
        this.currentQuesNum++;
        this.resetTimer();
        this.getProgressPercentage();
      }, 1000);
    }
  }
  //-----


  // Progress-bar
  getProgressPercentage() {
    this.progress = ((this.currentQuesNum / this.questionList.length) * 100).toString();
    return this.progress;
  }
  //-----


  // Timer
  startTimer() {
    this.interval = interval(1000)
      .subscribe(val => {
        this.timer--;

        if (this.timer === 0) {
          this.currentQuesNum++;
          this.timer = 60;
          this.points -= 10;
          this.wrongAns++;
        }
      });
    setTimeout(() => {
      this.interval.unsubscribe();
    }, 600000);
  }

  stopTimer() {
    this.interval.unsubscribe();
    this.timer = 0;
  }

  resetTimer() {
    this.stopTimer();
    this.timer = 60;
    this.startTimer();
  }
  //-----





}
