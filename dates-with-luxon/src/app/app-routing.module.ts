import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiledDashComponent } from './tiled-dash/tiled-dash.component';

const routes: Routes = [
  { path: "tiled-dash", component: TiledDashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
