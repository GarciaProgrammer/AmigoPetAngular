import { TokenServiceService } from './../services/token-service.service';
import { Observable } from 'rxjs';
import { UsuarioService } from './../services/usuario.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../beans/Usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user$: Observable<Usuario>;
  user?: Usuario;
  logged: boolean = false;
  constructor(tokenService: TokenServiceService) {
    this.user$ = tokenService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  verificaUsuario(){
    if (this.user != null) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  collapsed = true;

  ngOnInit(): void {
    this.verificaUsuario();
  }

}
