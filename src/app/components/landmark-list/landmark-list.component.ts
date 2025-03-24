import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarkCardComponent } from '../landmark-card/landmark-card.component';
import { Landmark } from '../../models/landmark/landmark.model';
import { SearchComponent } from '../search/search.component';
import { SortByOrderPipe } from '../../sort-by-order.pipe';
import { LandmarkService } from '../../services/landmark.service';


@Component({
  selector: 'app-landmark-list',
  imports: [LandmarkCardComponent, CommonModule, SearchComponent, SortByOrderPipe],
  templateUrl: './landmark-list.component.html',
  styleUrl: './landmark-list.component.css',
  standalone: true,
})
export class LandmarkListComponent {
  landmarkList: Landmark[] = [];
  landmarkService: LandmarkService = inject(LandmarkService);

  constructor() {
  }

  async ngOnInit() {
    try {
      this.landmarkList = await this.landmarkService.getAllLandmarks();
    } catch (error) {
      console.error('Failed to load landmarks:', error);
    }
  }
}