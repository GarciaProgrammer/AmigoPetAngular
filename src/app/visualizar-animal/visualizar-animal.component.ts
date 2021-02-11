import { Observable } from 'rxjs';
import { AnimalService } from './../services/animal.service';
import { Animal } from './../beans/Animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.scss']
})
export class VisualizarAnimalComponent implements OnInit {

  wpp?:string;
  animal: Observable<Animal> = new Observable();

  constructor(private servico:AnimalService) {

   }

  ngOnInit(): void {
    this.criaLinkWhatsapp(); 
  }

  criaLinkWhatsapp(){
 //   this.wpp = 
  }

  getAnimalSelecionado(id:number){
   this.animal = this.servico.getAnimalById(id);
  }

}
