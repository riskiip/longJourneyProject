import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularProject';
  nomineeName: string = 'Conny';
  agreed = 0;
  disagreed = 0;

  onVotedChanges(agree: boolean) {
    agree ? this.agreed++ : this.disagreed++;
  }

}
