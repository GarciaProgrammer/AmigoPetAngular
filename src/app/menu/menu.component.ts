import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const aux = window.localStorage.getItem('token');

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  userVerific: boolean = false;

  verificaUsuario(usuarioOn:any) {
    if (usuarioOn != null) {
      this.userVerific = true;
    } else {
      this.userVerific = false;
    }
  }

  collapsed = true;

  ngOnInit(): void {
    this.verificaUsuario(aux);
  }

}
