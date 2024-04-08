import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {FormsModule} from '@angular/forms';
import { GetWorkoutService } from '../../Services/get-workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-workout',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './new-workout.component.html',
  styleUrl: './new-workout.component.scss'
})
export class NewWorkoutComponent {
  name: string = "";
  mode: string = "";
  equipment: string = "";
  exercises: string = "";
  trainerTips: string = "";

  constructor(private workoutService: GetWorkoutService, private router: Router){}

  saveWorkout() {
    const workoutData = {
      name: this.name,
      mode: this.mode,
      equipment: this.equipment ? this.equipment.split(',').map(item => item.trim()) : [],
      exercises: this.exercises ? this.exercises.split(',').map(item => item.trim()) : [],
      trainerTips: this.trainerTips ? this.trainerTips.split(',').map(item => item.trim()) : []
    };
    this.workoutService.addWorkout(workoutData).subscribe(
      res => {
        console.log('Workout added successfully:', res);
      },
      error =>{
        console.error('Error adding workout:', error);
      }
    )
    this.redirectToWorkouts();
  }
  redirectToWorkouts() {
    this.router.navigate(['/workouts']);
  }
}


