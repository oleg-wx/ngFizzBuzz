import { Component } from '@angular/core';

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
export class TaskComponent {
}
