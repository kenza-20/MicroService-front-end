import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // 👈 Ajoute ceci

@Component({
  selector: 'app-job-offer-form',
  templateUrl: './job-offer-form.component.html',
  styleUrls: ['./job-offer-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] // ✅ Ajout de ReactiveFormsModule ici
})
export class JobOfferFormComponent {
  jobOfferForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobOfferForm = this.fb.group({
      title: [''],
      description: [''],
      status: ['']
    });
  }

  onSubmit() {
    console.log(this.jobOfferForm.value);
  }
}
