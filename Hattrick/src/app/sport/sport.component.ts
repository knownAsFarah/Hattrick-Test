import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SPORTS } from 'src/sports';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  sports = SPORTS;
  imageUrl = '../assets/images/football.jpg';
  
  constructor(private router : Router){
  }
  viewFields(type : String){
    this.router.navigateByUrl('/fields')
    console.log(type)
  }
}
