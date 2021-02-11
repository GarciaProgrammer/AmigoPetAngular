import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dica } from '../beans/Dica';

@Injectable({
  providedIn: 'root'
})
export class DicaService {

  constructor(public http:HttpClient) { }

  cadastrarDica(dica:Dica){
    return this.http.post('http://localhost:8080/dica/cadastrar', dica);
    
  }

  getAllDicas(): Observable<any>{
    return this.http.get('http://localhost:8080/dica/lista');
  }
}
