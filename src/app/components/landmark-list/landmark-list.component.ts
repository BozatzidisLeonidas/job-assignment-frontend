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
  landmarkList$!: Observable<Landmark[]>;//'?' property might be undefined and is not required., '!' I promise that this variable will be assigned before it is used. An Observable emits data over time, and components or services can subscribe to it to receive updates.'$' is a convention in Angular (and RxJS) to indicate that a variable is an Observable
  private searchTerm = new BehaviorSubject<string>('');
 //A BehaviorSubject is a special type of Subject (which is a kind of Observable) in RxJS that stores the current value and emits it to new subscribers. When a new value is pushed into it using the next() method, any component or service that has subscribed to it will be notified of the change. 
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
    //When a new value is pushed into it using the next() method, any component or service that has subscribed to it will be notified of the change.
  }
}
