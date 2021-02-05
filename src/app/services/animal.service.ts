import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  uri = 'localhost:8080/animal';

  constructor(private http: HttpClient) { }

  adicionarAnimal(nome:string, idade:string, porte:string) {
    const objAnimal = {
      nome,
      idade,
      porte
    };
    console.log(objAnimal);

    this.http.post(this.uri + '/animal/cadastra', objAnimal)
      .subscribe(res => console.log('feito'));
  }

  listarAnimais() {
    return this.http.get('http://localhost:8080/animal/lista');
  }
}
