import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
{
  path:'about',component:AboutComponent
},{
  path:'',component:TaskComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
