import { EstadoService } from './../services/estado.service';
import { Estado } from './../beans/Estado';
import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../beans/Cidade';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  constructor(private estadoServico: EstadoService) { }

  estados: Observable<Estado[]> = new Observable();
  cidades: Observable<Cidade[]> = new Observable();
  idEstadoSelecionado: number = 0;

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
