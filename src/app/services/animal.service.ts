import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../beans/Animal';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  listarAnimais(): Observable<any> {
    return this.http.get('http://localhost:8080/animal/lista', httpOptions);
  }

  salvarAnimal(animal:Animal){
    return this.http.post('http://localhost:8080/animal/cadastrar', animal, httpOptions);
  }

  getAnimalById(id:number){
    return this.http.get('http://localhost:8080/animal/visualizar/' + id);
  }

}
