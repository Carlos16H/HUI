import { Routes } from '@angular/router';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: '/workouts', pathMatch: 'full' }, 
    { path: 'workouts', component: WorkoutListComponent }, 
    { path: 'workout/:id', component: WorkoutComponent }, 
    { path: 'error', component: ErrorComponent }, 
    { path: '**', redirectTo: '/error' } 
];
