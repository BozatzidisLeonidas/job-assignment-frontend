import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandmarkService } from '../../services/landmark.service';
import { Landmark } from '../../models/landmark/landmark.model';

@Component({
  selector: 'app-landmark-fullpage',
  imports: [],
  templateUrl: './landmark-fullpage.component.html',
  styleUrl: './landmark-fullpage.component.css',
  standalone: true
})
export class LandmarkFullpageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  landmarkOrder = 0;
  landmarkService = inject(LandmarkService);
  landmark: Landmark | undefined;

  constructor(){
    const landmarkOrder = Number(this.route.snapshot.params['order']);
    this.landmark = this.landmarkService.getLandmarkByOrder(landmarkOrder);
  }
}
