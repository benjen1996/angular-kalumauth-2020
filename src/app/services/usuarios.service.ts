import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {

    return this.httpClient.get("https://localhost:5003/KalumAuth/v1/Usuarios")
  }


}
