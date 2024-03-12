import { Component , HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hattrick';
  isLargeScreen = true;
  constructor(private router : Router){

  }
  @HostListener('window:resize', ['$event'])
  
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth > 768; // Adjust the threshold as needed
  }
  navigateTo(path:string){
    console.log(path)
    this.router.navigateByUrl('/'+path)
  }
}
