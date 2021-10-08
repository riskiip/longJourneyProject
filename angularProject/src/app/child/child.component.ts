import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() nominee: string | undefined;
  @Output() voted = new EventEmitter<boolean>();

  onVote(vote: boolean) {
    this.voted.emit(vote);
  }
}
