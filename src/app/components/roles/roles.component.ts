import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Starting Angular Project";
  angularVersion = "Version 19.2.4";

  versionNumber = 19.2;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "checkbox";
  selectedState: string = '';

  buttonClicked():void {
    alert("GOT CLICKED")
  }
  buttonMessage(message: string):void {
    alert(message)
  }
}
