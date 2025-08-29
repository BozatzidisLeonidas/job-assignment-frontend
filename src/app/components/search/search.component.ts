import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  //Stelnw data ston gonio anti na lamvanw me Input

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    // This is because in JavaScript, events can be triggered by any type of HTML element, not just input elements.
    //However, we know that the event is being triggered by an <input> element specifically, so we want to let TypeScript know that we're working with an HTMLInputElement.
    //Den tha eixa .value an den to metetrepa se HTMLInputElement
    this.searchTerm.emit(inputElement.value);
  }
}