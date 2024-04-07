import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SportComponent } from './sport/sport.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PublicGamesComponent } from './public-games/public-games.component';
import { UserHelpComponent } from './user-help/user-help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { environment } from '../environments/environment';
import { RulesComponent } from './rules/rules.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldCardComponent } from './field-card/field-card.component';
import { FieldInfoComponent } from './field-info/field-info.component';
import { FooterComponent } from './footer/footer.component';
// import { AngularFireModule } from '@angular/fire';

const appRoutes : Routes =
[
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'fields',component: FieldsComponent},
  {path: 'schedule',component: ScheduleComponent},
  {path: 'help',component: UserHelpComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'info',component: FieldInfoComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportComponent,
    ProfileComponent,
    ScheduleComponent,
    PublicGamesComponent,
    UserHelpComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RulesComponent,
    FieldsComponent,
    FieldCardComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
