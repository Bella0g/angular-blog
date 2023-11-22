import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-blog';
  
  // Declare header text and admin mode boolean
  isAdminMode: boolean = false;
  headerText: string = 'Admin';

  constructor(private router: Router) { }

  // Method to toggle the user mode between admin and user
  toggleUserStatus() {
    this.isAdminMode = !this.isAdminMode;
    this.headerText = this.isAdminMode ? 'User' : 'Admin';

    // If not in admin mode, navigate to the default route
    if (!this.isAdminMode) {
      this.router.navigate(['/']);
    }
  }
}
