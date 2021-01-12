import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';

import { DashboardsComponent } from './dashboards.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: '', component: DashboardsComponent, children: [
      { path: 'members', component: MembersComponent },
      { path: 'admins', component: AdminsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
