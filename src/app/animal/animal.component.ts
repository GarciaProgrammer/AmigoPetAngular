import { Animal } from './Animal';
import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../services/animais.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  public vetorAnimal: Animal[] = [];
  public animal: Animal = {};
  public id:number = -1;

  constructor(public animalServico: AnimaisService) { }

  ngOnInit(): void {
    this.id = -1;
    this.animal;
    this.vetorAnimal = this.animalServico.listarAnimais();
  }

  cadastrarAnimal(){
    this.animalServico.cadastrarAnimal(this.animal);
  }

  excluir(id:number) {
    this.animalServico.excluirAnimal(id);
    this.id = -1;
  }

  editar(id:number){
    this.id = id;
    this.animal = this.vetorAnimal[id];
  }

  atualizar(){
    this.animalServico.alterarCadAnimal(this.id, this.animal);
      this.id = -1;
    }
  }