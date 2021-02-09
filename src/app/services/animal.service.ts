import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    return this.http.post('http://localhost:8080/animal/cadastrar', animal);
  }
}
