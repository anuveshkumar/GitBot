import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IntentService } from '../intent.service';
import { Intent } from './intent.object';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @Output() actionSelected = new EventEmitter();
  actionMessage: string = 'actionMessage';
  constructor(private intentService: IntentService) { }
  intent: Intent;

  toExecute: string;
  ngOnInit() {
  }

  getActionString(actionString: string) {
    this.actionMessage = actionString;
    this.intent = new Intent(this.actionMessage, "en");
    this.intentService.getIntent(this.intent).subscribe((data: any) => {
      if (data.results.intents.length > 0) {
        this.toExecute = data.results.intents[0].slug;
        // console.log(this.toExecute);
      } else {
        this.toExecute = 'insensible';
        // console.log(this.toExecute);
      };
      this.actionSelected.emit(this.toExecute);
    });

  }
}
