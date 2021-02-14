import { MenuComponent } from './../menu/menu.component';
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
    private router: Router,
  ) {}

  ngOnInit(): void {}

  salvar() {
    this.servico.login(this.usuario).subscribe(
      (data) => {
        window.localStorage.removeItem('token');
        window.localStorage.setItem('token', data.token);

        this.router.navigate(['home']);
      },
      (erro) => {
        console.log(erro.error.message);
      }
    );
  }
}
