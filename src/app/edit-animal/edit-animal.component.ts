import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../beans/Animal';
import { Cidade } from '../beans/Cidade';
import { Estado } from '../beans/Estado';
import { AnimalService } from '../services/animal.service';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {

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
