import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  http = inject(HttpClient)

  getAllClients ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients")
  }
  addUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "GetAllClients", obj)
  }
  deleteClientById(id:number):Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }
}
