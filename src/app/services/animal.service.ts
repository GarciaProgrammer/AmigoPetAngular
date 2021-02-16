import { TokenServiceService } from './token-service.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../beans/Animal';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient, private tokenService:TokenServiceService ) { }

  listarAnimais(): Observable<any> {
    return this.http.get('http://localhost:8080/animal/lista', this.getAuthHeaders());
  }

  salvarAnimal(animal:Animal){
    return this.http.post('http://localhost:8080/animal/cadastrar', animal, this.getAuthHeaders());
  }

  getAnimalById(id:number){
    return this.http.get('http://localhost:8080/animal/visualizar/' + id);
  }

  getAuthHeaders(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('authToken') })
    };

    return httpOptions;
  }

}
