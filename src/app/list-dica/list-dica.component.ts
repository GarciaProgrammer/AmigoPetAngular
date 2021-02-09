import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dica',
  templateUrl: './list-dica.component.html',
  styleUrls: ['./list-dica.component.scss']
})
export class ListDicaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
