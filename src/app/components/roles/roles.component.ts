import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  
  roleList: IRole [] = [];
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any)=>{
      this.roleList = res.data;
    })
  }
  
  // firstName: string = "Starting Angular Project";

  // versionNumber = 19.2;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox";
  // selectedState: string = '';

  // buttonClicked():void {
  //   alert("GOT CLICKED")
  // }
  // buttonMessage(message: string):void {
  //   alert(message)
  // }
}
