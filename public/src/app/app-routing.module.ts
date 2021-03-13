import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './templates/admin/admin.component';
import { IndexComponent } from './templates/admin/components/index/index.component';
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
  {
    path : '' , redirectTo : "admin" , pathMatch: 'full'
  },
  { 
    path: "login", component: LoginComponent
  },
  {
    path: "admin", component: AdminComponent , canActivate : [AuthGuard] , 
    children: [
      { path: '', component: IndexComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
