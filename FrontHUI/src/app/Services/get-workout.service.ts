import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWorkoutService {

  Uri: string = 'http://localhost:3000/api/v1/workouts'
  constructor(private httpClient: HttpClient) {}

  getWorkouts(): Observable<any> {
    return this.httpClient.get(this.Uri).pipe(res => res);
  }
}
