import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './pages/todos-list/todos-list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'my-todos',
    component: TodosListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'my-todos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
