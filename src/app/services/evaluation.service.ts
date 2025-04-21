import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Interface for Evaluation entity
export interface Evaluation {
  id?: number;
  grade: number;
  employeId?: number;
  // Add other fields as per your backend Evaluation entity
}

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:8093/api/evaluations'; // Adjust URL as needed

  constructor(private http: HttpClient) {}

  // Create a new evaluation
  createEvaluation(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.post<Evaluation>(this.apiUrl, evaluation).pipe(
      catchError(this.handleError)
    );
  }

  // Get evaluations by employee ID
  getEvaluationsByEmploye(employeId: number): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/employe/${employeId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Get all evaluations
  getAllEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get employee grade by ID
  getEmployeGrade(employeId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/employe/${employeId}/grade`).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}