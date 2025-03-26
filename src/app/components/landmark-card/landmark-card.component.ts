import { Component, Input } from '@angular/core';
import { Landmark } from '../../models/landmark/landmark.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landmark-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './landmark-card.component.html',
  styleUrl: './landmark-card.component.css'
})
export class LandmarkCardComponent {
  @Input() landmark!: Landmark;
}
