import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Questions, Answers } from './mock-questions-answers';

import { Question, Answer } from './models';

import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  // mock async get requests
  getRandomQuestion(): Observable<Question> {
    return this.http.get<Question>('https://us-central1-quizengage.cloudfunctions.net/getRandomQuestion');
  }

  getAnswers(category: string): Observable<Answer[]> {
    return this.http.get<Answer[]>(
      'https://us-central1-quizengage.cloudfunctions.net/getAnswers',
      {params: {cat: category}}
    );
  }

  public getPossibleAnswers(question: Question, amount: number): Observable<Answer[]> {

    // cache answers once called?

    return this.getAnswers(question.category)
      .pipe(
        map( answers => this.getShuffledArray([
          answers.find(answer => answer.id === question.answerId),
          ...this.getRandomWrongAnswers(answers, question.answerId, amount - 1)
        ]))
      );
  }

  private getRandomWrongAnswers(answers: Answer[], id: string, amount: number) {
    const allWrongAnswers = answers.filter(answer => answer.id !== id);
    return this.getShuffledArray(allWrongAnswers).slice(0, amount);
  }

  // chance to see if they use copy/paste (like me :D )
  getShuffledArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}