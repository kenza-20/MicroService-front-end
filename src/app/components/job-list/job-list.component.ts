import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: any[] = []; // Liste des offres d'emploi

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAllJobs().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des offres', error);
      }
    );
  }
}
