import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule,],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  
  clientObj: Client = new Client();
  clientList: Client[]= [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient(); 
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
}
