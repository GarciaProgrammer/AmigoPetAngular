import { HttpClient } from '@angular/common/http';
import { Usuario } from './../beans/Usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  cadastrarUsuario(usuario:Usuario){
    return this.http.post('http://localhost:8080/usuario/cadastrar', usuario);
  }

  
}
