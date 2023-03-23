import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmissionformComponent } from './submissionform/submissionform.component';

const routes: Routes = [
  {path:'submissionform', component: SubmissionformComponent},
  // We make this path empty because we always want to render home screen upon loading
  {path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
