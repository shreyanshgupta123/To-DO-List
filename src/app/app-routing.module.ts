import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HelpSettingComponent } from './Components/help-setting/help-setting.component';
import { SettingsComponent } from './Components/settings/settings.component';


const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'Help_support',component : HelpSettingComponent},
{path:'settings',component : SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
