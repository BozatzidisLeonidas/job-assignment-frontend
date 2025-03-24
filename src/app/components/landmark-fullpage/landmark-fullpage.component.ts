import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandmarkService } from '../../services/landmark.service';
import { Landmark } from '../../models/landmark/landmark.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-landmark-fullpage',
  imports: [ModalComponent],
  templateUrl: './landmark-fullpage.component.html',
  styleUrl: './landmark-fullpage.component.css',
  standalone: true
})
export class LandmarkFullpageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  landmarkService = inject(LandmarkService);
  landmark: Landmark | undefined;
  
  photoUrl = signal<string>('');  // Signal to track the image URL
  showModal = signal<boolean>(false);  // Signal to track modal visibility

  constructor() {
  }

  async ngOnInit() {
    const landmarkOrder = Number(this.route.snapshot.params['order']);
    try {
      this.landmark = await this.landmarkService.getLandmarkByOrder(landmarkOrder);
    } catch (error) {
      console.error('Error fetching landmark:', error);
    }
  }

  openModal(photo: string): void {
    this.photoUrl.set(photo);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false); // Hide modal
  }
}
