import { Component } from '@angular/core';
import { SPORTS } from 'src/sports';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  sports = SPORTS;
  imageUrl = '../assets/images/football.jpg';

}
