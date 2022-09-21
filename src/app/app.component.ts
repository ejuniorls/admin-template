import { Component } from '@angular/core';
import { faAngular, faBootstrap, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello, Angular with Bootstrap and Font Awesome!';

  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faFontAwesome = faFontAwesome;
}
