import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridOneComponent } from './grid-one/grid-one.component';
import { GridThreeComponent } from './grid-three/grid-three.component';
import { GridTwoComponent } from './grid-two/grid-two.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'grid-one', component: GridOneComponent},
  {path: 'grid-two', component: GridTwoComponent},
  {path: 'grid-three', component: GridThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
