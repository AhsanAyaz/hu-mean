import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ {
  path: '',
  canActivate: [AuthGuard],
  component: HomeComponent
}, {
  path: 'todo',
  component: TodoAppComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'users',
  component: UsersComponent
}, {
  path: 'welcome/:message',
  component: WelcomeComponent
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
