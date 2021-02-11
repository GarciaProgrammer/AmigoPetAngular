import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../beans/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {};
  constructor(private servico: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.servico.cadastrarUsuario(this.usuario).subscribe(
      resolve => {
        console.log(resolve);
      }, error => {
        console.log(error);
      }
    );
  }
}
