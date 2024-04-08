import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { GetWorkoutService } from '../../Services/get-workout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { workoutInterface } from '../../interfaces/workout.interface';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent {
  name: string = "";
  mode: string = "";
  equipment: string = "";
  exercises: string = "";
  trainerTips: string = "";

  selectedWorkout: workoutInterface = {
    _id: "",
    name: "",
    mode: "",
    equipment: "",
    exercises: "",
    createdAt: "",
    updatedAt: "",
    trainerTips: "",
  };

  id: String ="";

  constructor(private workoutService: GetWorkoutService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getWorkout();
  }
  getWorkout() {
    this.workoutService.getWorkoutById(this.id).subscribe({
      next: (result) => {
        this.selectedWorkout = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  saveWorkout() {
    const workoutData = {
      name: this.name,
      mode: this.mode,
      equipment: this.equipment ? this.equipment.split(',').map(item => item.trim()) : [],
      exercises: this.exercises ? this.exercises.split(',').map(item => item.trim()) : [],
      trainerTips: this.trainerTips ? this.trainerTips.split(',').map(item => item.trim()) : []
    };
    this.workoutService.updateWorkout(this.selectedWorkout._id, workoutData).subscribe(
      res => {
        console.log(workoutData)
        console.log('Workout added successfully:', res);
      },
      error => {
        console.error('Error adding workout:', error);
      }
    )
    this.redirectToWorkouts();
  }
  redirectToWorkouts() {
    this.router.navigate(['/workouts']);
  }
}

