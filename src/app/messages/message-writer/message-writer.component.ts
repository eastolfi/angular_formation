import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-writer',
  templateUrl: './message-writer.component.html',
  styleUrls: ['./message-writer.component.scss']
})
export class MessageWriterComponent implements OnInit {
  @Output()
  public textSend = new EventEmitter<string>();


  public text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('keyup.Enter')
  public sendText(): void {
    this.textSend.emit(this.text);

    this.text = '';
  }
}
