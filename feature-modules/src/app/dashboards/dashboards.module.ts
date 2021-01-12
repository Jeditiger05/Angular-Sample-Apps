import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { MembersComponent } from './members/members.component';
import { AdminsComponent } from './admins/admins.component';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [DashboardsComponent, MembersComponent, AdminsComponent, ModalComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
