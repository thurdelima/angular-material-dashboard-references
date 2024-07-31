import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercent: number = 50;
  public queryMode: ProgressBarMode = 'query'; //esse é um modo de loading de indecisão, esperando pra carregar ainda.
  public queryValue: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.loadingProgress(500, 70)
      .subscribe(i => this.loadingPercent = i);

      //concat realiza a execução de mais de um observable
      concat(
        interval(3000)
        .pipe(
          take(1),
          tap(_ => (this.queryMode = 'determinate'))
        ),
        this.loadingProgress(500, 80)
      ).subscribe(i => this.queryValue = i)
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed)
    .pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    )
  }

}
