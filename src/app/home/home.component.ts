import { Cidade } from './../beans/Cidade';
import { EstadoService } from './../services/estado.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../beans/Estado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private estadoService: EstadoService) { }

  estados: Observable<Estado[]> = new Observable();
  cidades: Observable<Cidade[]> = new Observable();
  idEstadoSelecionado:number = 0;

  ngOnInit(): void {
    this.buscar();
    this.estados.subscribe(
      response => console.log(response)
    );
  }

  buscar() {
    this.estados = this.estadoService.buscarEstados();
  }

  buscarCidade() {
    this.cidades = this.estadoService.buscarCidade(this.idEstadoSelecionado);
    this.cidades.subscribe(
      response => console.log(response)
    );
  }

  images = ["../../assets/dogao.jpg", "../../assets/gatao.jpg", "../../assets/dogao2.jpg"];
}
