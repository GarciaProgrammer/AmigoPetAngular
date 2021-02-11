import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../beans/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  listarAnimais(): Observable<any> {
    return this.http.get('http://localhost:8080/animal/lista');
  }

  salvarAnimal(animal:Animal){
    let form = new FormData();
    form.append('nome', animal.nome || '');
    form.append('foto', animal.foto || '');


    return this.http.post('http://localhost:8080/animal/cadastrar', form, this.getHeaders());
  }

  getAnimalById(id:number){
    return this.http.get('http://localhost:8080/animal/visualizar/' + id);
  }

  getHeaders(){
    const header = new HttpHeaders({
      'Accept': 'application/json'
    });

    return header;
  }
}
