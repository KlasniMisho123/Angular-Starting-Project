import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  
  designationList: IDesignation [] = [];
  masterService = inject(MasterService)

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res:any)=>{
      this.designationList = res.data;
    }, error =>{
      console.log("Designation API ERROR/ Network Down")
    })
  } 

}
