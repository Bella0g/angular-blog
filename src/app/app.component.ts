import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-blog';
  // Declare header text and admin mode bool
  isAdminMode: boolean = false;
  headerText: string = 'Admin';

  constructor(private router: Router) { }
  // Toggle admin user mode
  toggleUserStatus() {
    this.isAdminMode = !this.isAdminMode;
    this.headerText = this.isAdminMode ? 'User' : 'Admin';

    if (!this.isAdminMode) {
      this.router.navigate(['/']);
    }
  }
}
