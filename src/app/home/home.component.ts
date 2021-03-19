import { Component, OnInit } from '@angular/core';

//El component es como la metadata del componente y con estas propiedades lo podremos
//llamar. Casi nunca se manipula.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
