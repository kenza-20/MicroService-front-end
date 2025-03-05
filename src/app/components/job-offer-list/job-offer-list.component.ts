import { Component, OnInit } from '@angular/core';
import { JobOfferService, JobOffer } from '../../services/job-offer.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // 👈 Ajoute ceci

@Component({
  selector: 'app-job-offer-list',
  templateUrl: './job-offer-list.component.html',
  styleUrls: ['./job-offer-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class JobOfferListComponent implements OnInit {
  jobOffers: JobOffer[] = [];

  constructor(private jobOfferService: JobOfferService, private router: Router) {}

  ngOnInit(): void {
    this.loadJobOffers();
  }

  loadJobOffers() {
    this.jobOfferService.getJobOffers().subscribe(data => this.jobOffers = data);
  }

  deleteJobOffer(id?: number) {
    if (id && confirm('Voulez-vous supprimer cette offre ?')) {
      this.jobOfferService.deleteJobOffer(id).subscribe(() => this.loadJobOffers());
    }
  }

  editJobOffer(id?: number) {
    this.router.navigate(['/edit', id]);
  }
}
