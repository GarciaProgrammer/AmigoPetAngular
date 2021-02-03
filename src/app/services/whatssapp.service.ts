import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatssappService {

  constructor() { }

  criarLink(numero: number){
    return "https://api.whatsapp.com/send?phone=" + numero + "&text=Salvee!";
  }

}
