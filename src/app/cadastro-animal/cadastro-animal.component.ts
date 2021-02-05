import { AnimalService } from './../services/animal.service';
import { Animal } from './../beans/Animal';
import { EstadoService } from './../services/estado.service';
import { Estado } from './../beans/Estado';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../beans/Cidade';

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.component.html',
  styleUrls: ['./cadastro-animal.component.scss']
})
export class CadastroAnimalComponent implements OnInit {

  uri = 'localhost:8080/animal/';
  
  estados: Observable<Estado[]> = new Observable();
  cidades: Observable<Cidade[]> = new Observable();
  idEstadoSelecionado: number = 0;
  animais?:Animal[];

  
  constructor(private estadoServico:EstadoService, private animalServico:AnimalService) { }

  ngOnInit(): void {
    this.buscar();
    this.animalServico.listarAnimais()
    .subscribe(data => console.log(data)
    );
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
