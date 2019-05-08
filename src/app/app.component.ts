import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'KaliKedua';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  panelOpenState = false;
  showFiller = false;
}
