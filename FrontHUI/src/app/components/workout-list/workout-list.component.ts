import { Component, OnInit } from '@angular/core';
import { GetWorkoutService } from '../../Services/get-workout.service';
import { workoutInterface } from '../../interfaces/workout.interface';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.scss'
})
export class WorkoutListComponent implements OnInit{
  workoutsList: workoutInterface[] = [];
  constructor(private workoutServise: GetWorkoutService, private router: Router) {}
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

  deleteWorkout(id: String){
    this.workoutServise.deleteWorkout(id).subscribe(res => {
        console.log('Entrenamiento eliminado exitosamente:', res);
      },
      error => {
        console.error('Error al eliminar el entrenamiento:', error);
      }
    )
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }
  WorkoutEdit(workoutId: String) {
    this.router.navigate(['/workout', workoutId]);
  }
}