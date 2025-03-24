import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule to use *ngIf
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() photoUrl: string = ''; 
  @Input() showModal: boolean = false; // Receive modal visibility

  closeModal(): void {
    this.showModal = false; // Hide modal when clicking outside
  }
}