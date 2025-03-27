import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() photoUrl: string = '';
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();

  public showLoader = true;

  onImageLoad() {
    this.showLoader = false;
  }

  closeModal(): void {
    this.closeModalEvent.emit();
    this.showLoader = true;
  }
}