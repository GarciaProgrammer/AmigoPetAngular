import { EstadoService } from './../services/estado.service';
import { Estado } from './../beans/Estado';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../beans/Cidade';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  constructor(private estadoServico: EstadoService) { }

  estados:Observable<Estado[]> = new Observable();
  cidades:Observable<Cidade[]> = new Observable();
  idEstadoSelecionado:number = 0;


  ngOnInit(): void {

  }

  buscar(){
    this.estados = this.estadoServico.buscarEstados();
  }

  buscarCidade(){

  }

}
