import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Starting Angular Project";
  angularVersion = "Version 19.2.4";
  
  versionNumber = 19.2;

  isActive: boolean = false;

  currentDate: Date = new Date();
}
