import { TokenServiceService } from './token-service.service';
import { AuthService } from './auth.service';
import { Usuario } from './../beans/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private tokenService: TokenServiceService) { }


  cadastrarUsuario(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario);
  }


}
