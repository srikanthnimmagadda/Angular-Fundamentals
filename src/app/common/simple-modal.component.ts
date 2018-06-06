import { JQ_TOKEN } from './j-query.service';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') containerElement: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    this.$(this.containerElement.nativeElement).modal('hide');
  }
}
