import { Component, OnInit } from '@angular/core';
import { EvaluationService, Evaluation } from './evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html'
})
export class EvaluationComponent implements OnInit {
  evaluations: Evaluation[] = [];
  grade: number | null = null;

  constructor(private evaluationService: EvaluationService) {}

  ngOnInit(): void {}

  loadAllEvaluations(): void {
    this.evaluationService.getAllEvaluations().subscribe({
      next: (evaluations) => (this.evaluations = evaluations),
      error: (err) => console.error('Failed to load evaluations', err)
    });
  }

  loadEvaluationsByEmploye(employeId: number): void {
    this.evaluationService.getEvaluationsByEmploye(employeId).subscribe({
      next: (evaluations) => (this.evaluations = evaluations),
      error: (err) => console.error('Failed to load evaluations', err)
    });
  }

  getGrade(employeId: number): void {
    this.evaluationService.getEmployeGrade(employeId).subscribe({
      next: (grade) => (this.grade = grade),
      error: (err) => console.error('Failed to load grade', err)
    });
  }

  createNewEvaluation(): void {
    const newEvaluation: Evaluation = { grade: 85, employeId: 1 }; // Example data
    this.evaluationService.createEvaluation(newEvaluation).subscribe({
      next: (evaluation) => this.evaluations.push(evaluation),
      error: (err) => console.error('Failed to create evaluation', err)
    });
  }
}