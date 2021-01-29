import { Animal } from '../animal/Animal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor() { }

  private vetorAnimais: Animal[] = [
    { nomeAnimal:'Champson', racaAnimal:'Bulldog', porteAnimal:'medio', especieAnimal:'Cachorro', idade:10, sexo:'Macho', descricao:'Bastante agitado'},
    { nomeAnimal:'Irineu', racaAnimal:'Ciames', porteAnimal:'pequeno', especieAnimal:'Gato', idade:11, sexo:'Femea', descricao:'Chato'},
    { nomeAnimal:'Xerox', racaAnimal:'Vira-lata', porteAnimal:'medio', especieAnimal:'Cachorro', idade:13, sexo:'Macho', descricao:'Bem bobão'},
    { nomeAnimal:'Xerox', racaAnimal:'Vira-lata', porteAnimal:'medio', especieAnimal:'Cachorro', idade:13, sexo:'Macho', descricao:'Bem bobão'}
  ]

  public cadastrarAnimal(animal: Animal) {
    this.vetorAnimais.push(animal);
  }

  public listarAnimais() {
    return this.vetorAnimais;
  }

  public alterarCadAnimal(id: number, animal: Animal) {
    this.vetorAnimais[id] = animal;
  }

  public excluirAnimal(id: number) {
    this.vetorAnimais.splice(id, 1);
  }


}
