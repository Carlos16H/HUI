import { Routes } from '@angular/router';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { ErrorComponent } from './components/error/error.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/workouts', pathMatch: 'full' }, 
    { path: 'workouts', component: WorkoutListComponent },
    { path: 'newWorkout', component: NewWorkoutComponent},
    { path: 'workout/:id', component: WorkoutComponent }, 
    { path: 'error', component: ErrorComponent }, 
    { path: '**', redirectTo: '/error' } 
];
