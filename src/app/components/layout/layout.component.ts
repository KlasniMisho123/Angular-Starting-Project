import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)
  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem('empErpUser')
    alert("User Logged Out!")
  }
}
