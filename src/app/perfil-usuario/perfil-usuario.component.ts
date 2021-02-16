import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../beans/Cidade';
import { Estado } from '../beans/Estado';
import { Usuario } from '../beans/Usuario';
import { EstadoService } from '../services/estado.service';
import { TokenServiceService } from '../services/token-service.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private estadoServico: EstadoService, private tokenService: TokenServiceService, private usuarioServico: UsuarioService) {
    this.usuario$ = tokenService.getUser();
    this.usuario$.subscribe((resolve) => {
      this.usuario.id = resolve.id;
      this.usuario.nome = resolve.nome;
      this.usuario.email = resolve.email;
      this.usuario.celular = resolve.celular;
    }
    );
  }

  estados: Observable<Estado[]> = new Observable();
  cidades: Observable<Cidade[]> = new Observable();
  idEstadoSelecionado: string = '0';
  usuario: Usuario = {};
  usuario$: Observable<Usuario>;

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.estados = this.estadoServico.buscarEstados();
  }


  buscarCidade() {
    this.cidades = this.estadoServico.buscarCidade(this.idEstadoSelecionado);
    this.cidades.subscribe(
      resolve => console.log(resolve)
    );
  }

  alterarUsuario() {
    this.usuarioServico.alterar(this.usuario);
  }
}
