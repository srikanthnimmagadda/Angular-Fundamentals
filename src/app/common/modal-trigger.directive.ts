import { JQ_TOKEN } from './j-query.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private htmlElement: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input('appModalTrigger') modalId: string;

  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.htmlElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.htmlElement.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
