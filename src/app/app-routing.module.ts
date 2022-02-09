import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'customers', component: UserComponent},
  { path: 'customer/:id', component: UserDetailComponent},
  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
