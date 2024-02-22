import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Player_cardComponent } from './Player_card/Player_card.component';
import { Popularity_tableComponent } from './popularity_table/popularity_table.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { Player_dataComponent } from './Player_data/Player_data.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'Player_card',component:Player_cardComponent},
  {path:'popularity_table',component:Popularity_tableComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Player_data',component:Player_dataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
