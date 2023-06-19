import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-dog-walker',
  templateUrl: './perfil-dog-walker.component.html',
  styleUrls: ['./perfil-dog-walker.component.scss'],
})
export class PerfilDogWalkerComponent implements OnInit {
  horarios = [
    {
      horario: 'Mañana',
      dias: [
        { dia: 'Lunes', valor: true },
        { dia: 'Martes', valor: false },
        { dia: 'Miercoles', valor: true },
        { dia: 'Jueves', valor: false },
        { dia: 'Viernes', valor: false },
        { dia: 'Sabado', valor: true },
        { dia: 'Domingo', valor: false },
      ],
    },
    {
      horario: 'Tarde',
      dias: [
        { dia: 'Lunes', valor: true },
        { dia: 'Martes', valor: false },
        { dia: 'Miercoles', valor: true },
        { dia: 'Jueves', valor: false },
        { dia: 'Viernes', valor: false },
        { dia: 'Sabado', valor: true },
        { dia: 'Domingo', valor: true },
      ],
    },
    {
      horario: 'Noche',
      dias: [
        { dia: 'Lunes', valor: false },
        { dia: 'Martes', valor: true },
        { dia: 'Miercoles', valor: false },
        { dia: 'Jueves', valor: true },
        { dia: 'Viernes', valor: true },
        { dia: 'Sabado', valor: false },
        { dia: 'Domingo', valor: true },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
