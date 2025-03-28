import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  http = inject(HttpClient)

  getAllUser():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("https://jsonplaceholder.typicode.com/users")
  }

  getAllClientProject():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT)
  }

  getAllClients ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }

  getAllEmployee():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }

  addUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL +  Constant.API_METHOD.ADD_UPDATE_CLIENT, obj)
  }
  
  deleteClientById(id:number):Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL +  Constant.API_METHOD.DELETE_BY_ID + id)
  }

  addClientProjectUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL +  Constant.API_METHOD.ADD_UPDATE_CLIENT, obj)
  }
}
