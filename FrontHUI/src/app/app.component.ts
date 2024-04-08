import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { ErrorComponent } from './components/error/error.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { HeaderComponent } from './components/header/header.component';
import { NewWorkoutComponent } from './components/new-workout/new-workout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, WorkoutListComponent, ErrorComponent, WorkoutComponent, HeaderComponent, NewWorkoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FrontHUI';
}
