import { Component, Input } from '@angular/core';
import { Landmark } from '../../models/landmark/landmark.model';
import { LandmarkFullpageComponent } from '../landmark-fullpage/landmark-fullpage.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landmark-card',
  imports: [RouterModule],
  templateUrl: './landmark-card.component.html',
  styleUrl: './landmark-card.component.css'
})
export class LandmarkCardComponent {
  @Input() landmark!: Landmark;
}
