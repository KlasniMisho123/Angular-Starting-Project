import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  
  ngOnInit(): void {
    console.log('hi')
  }
  
  firstName: string = "Starting Angular Project";

  versionNumber = 19.2;
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
