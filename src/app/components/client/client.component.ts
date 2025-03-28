import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  
  currentDate: Date = new Date()

  clientObj: Client = new Client();
  clientList: Client[]= [];

  constantList = Constant;
  
  clientService = inject(ClientService);

  userList$: Observable<any> = new Observable<any>

  ngOnInit(): void {
    this.loadClient(); 
    this.userList$ = this.clientService.getAllUser()
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    // debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=> {
      if(res.result) {
        alert("Client Created Successfully!")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert("Client Create Error")
      }
    })
  }

  clearClientHandle() {
    alert("Client Inputs Cleared Successfully!")
  }

  onDelete(id:number) {
    const isDelete = confirm("Are You Sure You Want To Delete This User?");
    if(isDelete) {
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel) => {
        if(res.result) {
          alert("Client Deleted Successfully!")
          this.loadClient();
        } else {
          alert("Client Delete Error")
        }
      })
    } 
  }
  onEdit(data: Client) {
    this.clientObj = data;
  }
}
