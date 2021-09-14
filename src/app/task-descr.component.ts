import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-descr',
  styles: [
    `
      :host {
        dispaly: block;
      }
      .container {
        display: flex;
      }
      .container > div {
        flex: 0 0 50%;
        padding: 16px;
      }
      .container > div:first-child {
        border-right: 1px gray solid;
      }

      .add {
        padding: 16px 0;
        font-size: 0.8em;
        opacity: 0.7;
      }
    `
  ],
  template: `
    <div>
      <div [innerHTML]="comment"></div>
      <ul>
        <li *ngFor="let condition of conditions" [innerHTML]="condition"></li>
      </ul>
      <div style="text-decoration:underline">Like in example below</div>
      <div class="add">
        <span [innerHTML]="additional"></span>
        <ol>
          <li
            *ngFor="let condition of additionalConditions"
            [innerHTML]="condition"
          ></li>
        </ol>
      </div>
    </div>
    <div class="container">
      <div>
        <ng-content></ng-content>
      </div>
      <div>
        1<br />
        2<br />
        <i>Fizz</i><br />
        4<br />
        <b>Buzz</b><br />
        ...
      </div>
    </div>
  `
})
export class TaskDescrComponent {
  comment = `Create component <strong>fizz-buzz</strong>, that displays numbers from 1 to any (<b>number parameter</b>, ex. 100).`;
  conditions = [
    'If number is multiple of 3 then dispaly <i>Fizz</i> in italic',
    'If multiple of 5, <b>Buzz</b> in bold',
    'Else, number',
    'What is missing?'
  ];
  additional = `In addition`;
  additionalConditions = [
    'Use <b>numbers.service</b> to get number',
    '<i>fizz-buzz</i> in this usecase must not exceed 120 items',
    'How to pass data from one compoent to another without "props drilling"?'
  ];
}
