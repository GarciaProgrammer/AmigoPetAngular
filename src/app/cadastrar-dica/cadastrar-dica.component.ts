import { Component, OnInit } from '@angular/core';
import { Dica } from '../beans/Dica';
import { DicaService } from '../services/dica.service';

@Component({
  selector: 'app-cadastrar-dica',
  templateUrl: './cadastrar-dica.component.html',
  styleUrls: ['./cadastrar-dica.component.scss']
})
export class CadastrarDicaComponent implements OnInit {

  dica: Dica = {}

  constructor(private servico:DicaService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.servico.cadastrarDica(this.dica).subscribe(
      (dica:Dica) => window.alert("Dica " + dica.titulo + "Cadastrada com sucesso!")
    );
    this.dica = new Dica;
  }
}
