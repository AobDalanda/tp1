import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Exo1Component} from "./exo1/exo1.component";
import {Exo3Component} from "./exo3/exo3.component";
import {TestServiceComponent} from "./test-service/test-service.component";

const routes: Routes = [

  { path: 'exo1', component: Exo1Component },
  { path: 'exo3', component: Exo3Component },
  { path: 'testService', component: TestServiceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
