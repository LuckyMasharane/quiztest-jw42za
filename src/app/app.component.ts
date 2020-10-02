import { Component, EventEmitter } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question, Answer } from './models';

import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  readonly possibleDifficulties = [
    { level: Difficulty.EASY, numberAnswers: 3 },
    { level: Difficulty.MEDIUM, numberAnswers: 4 },
    { level: Difficulty.HARD, numberAnswers: 5 }
  ];
  difficulty: Difficulty = Difficulty.EASY;

  get numberOfAnswers() {
    return this.possibleDifficulties
      .find(diff => diff.level === this.difficulty)
      .numberAnswers;
  }

  currentQuestion: Question;
  possibleAnswers: Answer[];

  correctAnswers: number;

  isCorrect = new EventEmitter<boolean>();

  constructor(private quizService: QuizService) {}

  requestQuestion(): void {
    this.quizService.getRandomQuestion().pipe(
      switchMap(question => {
        this.currentQuestion = question;
        return this.quizService.getPossibleAnswers(question, this.numberOfAnswers);
      })
    ).subscribe(answers => {
      this.possibleAnswers = answers;
    });
  }

  selectAnswer(id: string) {
    this.isCorrect.emit(this.currentQuestion.answerId === id);
    this.currentQuestion = undefined;
    this.possibleAnswers = [];
  }

}
