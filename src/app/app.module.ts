import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { Player_cardComponent } from './Player_card/Player_card.component';
import { Popularity_tableComponent } from './popularity_table/popularity_table.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { Player_dataComponent } from './Player_data/Player_data.component';

@NgModule({
  declarations: [						
    AppComponent,
    LoginComponent,
      HomepageComponent,
      Player_cardComponent,
      Popularity_tableComponent,
      SidenavComponent,
      DashboardComponent,
      Player_dataComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
