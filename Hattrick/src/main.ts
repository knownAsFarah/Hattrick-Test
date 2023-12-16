import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { RouterModule } from '@angular/router';

platformBrowserDynamic().bootstrapModule(AppModule, 
  //{
//   providers: [
//     RouterModule.forRoot([
//       // Define your routes here
//       // For example: { path: 'home', component: HomeComponent },
//     ])
//   ]
// }
);
 