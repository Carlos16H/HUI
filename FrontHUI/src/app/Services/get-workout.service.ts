import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addWorkout(workoutData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post(this.Uri, workoutData, httpOptions);
  }

  deleteWorkout(id: String): Observable<any> {
    const url = `${this.Uri}/${id}`;
    return this.httpClient.delete(url);
  }

  getWorkoutById(id: String): Observable<any> {
    const url = `${this.Uri}/${id}`;
    return this.httpClient.get(url);
  }

  updateWorkout(id: String, updatedData: any): Observable<any> {
    const url = `${this.Uri}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.patch(url, updatedData, httpOptions);
  }
}
