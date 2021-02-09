import { Observable } from 'rxjs';
import { WhatssappService } from './../services/whatssapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-animal',
  templateUrl: './visualizar-animal.component.html',
  styleUrls: ['./visualizar-animal.component.scss']
})
export class VisualizarAnimalComponent implements OnInit {

  wpp?:string;

  constructor(private servico:WhatssappService) {

   }

  ngOnInit(): void {
    this.criarLink();
    
  }

  criarLink(){
    this.wpp = this.servico.criarLink(47992201803);

  }

}
