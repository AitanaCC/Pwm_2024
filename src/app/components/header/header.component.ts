import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Importando CommonModule para usar *ngIf
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarOpen: boolean = false;
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}