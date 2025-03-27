import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LandmarkService } from '../../services/landmark.service';
import { Landmark } from '../../models/landmark/landmark.model';
import { ModalComponent } from '../modal/modal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landmark-fullpage',
  standalone: true,
  imports: [ModalComponent, CommonModule, RouterModule],
  templateUrl: './landmark-fullpage.component.html',
  styleUrls: ['./landmark-fullpage.component.css'],
})
export class LandmarkFullpageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  landmarkService: LandmarkService = inject(LandmarkService);

  landmark = signal<Landmark | null>(null);
  photoUrl = signal<string>('');
  showModal = signal<boolean>(false);

  async ngOnInit() {
    const landmarkOrder = Number(this.route.snapshot.params['order']);
    this.landmarkService.getLandmarkByOrder(landmarkOrder).subscribe({
      next: (landmark) => {
        if (landmark) {
          this.landmark.set(landmark);
        } else {
          console.error('Landmark not found.');
        }
      },
      error: (error) => {
        console.error('Error fetching landmark:', error);
      }
    });
  }

  openModal(photo: string): void {
    this.photoUrl.set(photo);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
  }
}
