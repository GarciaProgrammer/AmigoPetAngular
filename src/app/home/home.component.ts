import { Animal } from './../beans/Animal';
import { AnimalService } from './../services/animal.service';
import { EstadoService } from './../services/estado.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animais: Observable<Animal[]> = new Observable();

  constructor(private estadoService: EstadoService, private animalServico: AnimalService) { }

  ngOnInit(): void {
    this.getAllAnimais();
  }

  getAllAnimais() {
    this.animais = this.animalServico.listarAnimais();
    this.animais.subscribe(
      resolve => console.log(resolve)
    );
  }
}
