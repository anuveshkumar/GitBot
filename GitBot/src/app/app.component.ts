import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitBot';

  loadedSection = 'homepage';
  onNavigate(feature: string) {
    console.log(feature);
    this.loadedSection = feature;
  }
}
