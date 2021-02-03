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

  ngOnInit(): void {
  }

  public animais = [
    { nome: 'Gab', sexo: 'Masculino', porte: 'pequeno', especie: 'Dog'},
    { nome: 'Gab', sexo: 'Masculino', porte: 'pequeno', especie: 'Dog'},
    { nome: 'Gab', sexo: 'Masculino', porte: 'pequeno', especie: 'Dog'}
  ]

  images = ["../../assets/dogao.jpg", "../../assets/gatao.jpg", "../../assets/dogao2.jpg"];
}
