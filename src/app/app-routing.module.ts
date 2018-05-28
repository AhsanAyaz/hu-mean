import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
}, {
  path: 'todo',
  component: TodoAppComponent
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
