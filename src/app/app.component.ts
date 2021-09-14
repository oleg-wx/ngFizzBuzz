import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  VERSION
} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
    <div>
      <task-descr>
        <div>
          <!-- <fizz-buzz [number]="max"></fizz-buzz> -->
        </div>
      </task-descr>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  max = 0;
  ngAfterContentInit(): void {
    this.max = 100;
  }
}
