import { Component, OnInit } from '@angular/core';
import { GetWorkoutService } from '../../Services/get-workout.service';
import { workoutInterface } from '../../interfaces/workout.interface';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.scss'
})
export class WorkoutListComponent implements OnInit{
  workoutsList: workoutInterface[] = [];
  constructor(private workoutServise: GetWorkoutService) {}
  ngOnInit(): void {
      this.getWorkoutList();
  }
  getWorkoutList(){
    this.workoutServise.getWorkouts().subscribe({
      next: (result) => {
        this.workoutsList = result.data;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}