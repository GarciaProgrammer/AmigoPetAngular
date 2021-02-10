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
  idEstadoSelecionado?: string = '0';
  idCidadeSelecionada?: string = '0';
  cidadeNome?: string = '0';
  animais?: Animal[];
  animal: Animal = {};

  constructor(private estadoServico: EstadoService, private animalServico: AnimalService) { }

  ngOnInit(): void {
    this.buscar();
    // this.animalServico.listarAnimais()
    //   .subscribe(data => console.log(data)
    //   );
  }

  buscar() {
    this.estados = this.estadoServico.buscarEstados();
    this.estados.subscribe(resolve => console.log(resolve)
    );
  }

  buscarCidade() {
    this.cidades = this.estadoServico.buscarCidade(this.idEstadoSelecionado);
    this.cidades.subscribe(
      resolve => console.log(resolve)
    );
  }

  salvar() {
    this.animal.status = 'A';
    this.animal.cidade = this.cidadeNome;
    this.animal.estado = 'teste';
    this.animalServico.salvarAnimal(this.animal).subscribe(
      (animal: Animal) => {
        alert('Animal' + animal.nome + 'Salvo com sucesso!');
      },
      error => {
        console.log(error);
      }
    )
    this.animal = new Animal;
  }
}
