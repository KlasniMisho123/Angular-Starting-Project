import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate:  new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate:  new FormControl(""),
    contactPerson:  new FormControl(""),
    contactPersonContactNo:  new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails:  new FormControl(""),
    contactPersonEmailId:  new FormControl(""),
    clientId: new FormControl("")
  })

  clientSrv = inject(ClientService)
  employeeList: Employee[]=[];
  clientList: Client[]=[];

  firstName = signal("Angular 19")
  projectList = signal<ClientProject[]>([])

  changeFirstName() {
    this.firstName = signal("Angular 19.4.2")
  }

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res:APIResponseModel) => {
      this.employeeList = res.data
    })
  }
  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data
    })
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
    if(res.result) {
      alert("Project Created Successfully")
    } else {
      alert(res.message)
    }
   })
  }
}
