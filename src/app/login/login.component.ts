import { TokenStorageService } from './../services/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Usuario } from './../beans/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = {};

  constructor(
    private servico: AuthService,
    private tokenStore: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  salvar() {
    this.servico.login(this.usuario).subscribe(
      (data) => {
        window.localStorage.setItem('token', data.token)
        //this.tokenStore.saveToken(data.accessToken);
        this.router.navigate(['home']);
      },
      (erro) => {
        console.log(erro.error.message);
      }
    );
  }
}
