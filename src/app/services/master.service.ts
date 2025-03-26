import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient)

  getDesignations() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
