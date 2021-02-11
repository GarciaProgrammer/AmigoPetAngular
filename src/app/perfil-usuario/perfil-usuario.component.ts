import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../beans/Cidade';
import { Estado } from '../beans/Estado';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private estadoServico: EstadoService) { }

  estados: Observable<Estado[]> = new Observable();
  cidades: Observable<Cidade[]> = new Observable();
  idEstadoSelecionado: string = '0';

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

}
