import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarkCardComponent } from '../landmark-card/landmark-card.component';
import { Landmark } from '../../models/landmark/landmark.model';
import { SearchComponent } from '../search/search.component';
import { SortByOrderPipe } from '../../sort-by-order.pipe';
import { LandmarkService } from '../../services/landmark.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-landmark-list',
  standalone: true,
  imports: [CommonModule, LandmarkCardComponent, SearchComponent, SortByOrderPipe],
  templateUrl: './landmark-list.component.html',
  styleUrls: ['./landmark-list.component.css'],
})
export class LandmarkListComponent {
  landmarkList$!: Observable<Landmark[]>;
  private searchTerm = new BehaviorSubject<string>('');

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit(): void {
    const allLandmarks$ = this.landmarkService.getAllLandmarks();

    this.landmarkList$ = combineLatest([
      this.searchTerm.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        startWith('')
      ),
      allLandmarks$
    ]).pipe(
      switchMap(([term]) => {
        if (term) {
          return this.landmarkService.searchLandmarks(term);
        } else {
          return allLandmarks$;
        }
      })
    );
  }

  onSearchTermChange(term: string): void {
    this.searchTerm.next(term);
  }
}
