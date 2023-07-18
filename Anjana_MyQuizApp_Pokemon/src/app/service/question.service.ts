import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  // user-defined method
  getAllQuestionsJson() {
    return this.http.get<any>("assets/questions.json");
    // use the http client and get all the questions from questions.json file (datatype: any)
  }

  getAllAnswersJson() {
    return this.http.get<any>("assets/mainAns.json");
  }
}
