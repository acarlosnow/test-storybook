import {
  EventEmitter,
  Component,
  OnInit,
  Input,
  Directive,
  HostBinding,
  Output,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
  @Input() name = 'test';
  constructor() {}

  ngOnInit() {}
}

@Directive({
  selector: '[appSomeDirective]'
})
export class SomeDirective {
  @HostBinding('class.btn') classIsDirective = true;
  @HostBinding('class.btn-primary') classIsasdDirective = true;

  @Output()
  testMe = new EventEmitter();

  @HostListener('click', ['$event'])
  testasda(e) {
    this.testMe.emit(e);
  }
}
