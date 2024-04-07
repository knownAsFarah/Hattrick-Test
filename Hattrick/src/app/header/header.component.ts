import { Component , HostListener, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLargeScreen = true;
  @Input() navigateTo: any
  constructor(private router: Router){}

  @HostListener('window:resize', ['$event'])
  
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth > 768; 
  }
  navigate(path:string){
    this.router.navigateByUrl('/'+path)
  }
  


}
