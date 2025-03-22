import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LandmarkCardComponent } from './components/landmark-card/landmark-card.component';
import { LandmarkListComponent } from './components/landmark-list/landmark-list.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandmarkCardComponent, LandmarkListComponent, SearchComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instashopFront';
}
