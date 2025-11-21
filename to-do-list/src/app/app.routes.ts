import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'auth', component: AuthComponent},
    { path: '**', component: HomeComponent },
];
