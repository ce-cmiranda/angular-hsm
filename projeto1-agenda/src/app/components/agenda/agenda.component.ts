import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  info = [{
    id: 1,
    data: "10/10/2020",
    tarefa: "Prova Mestrado",
    tipo: "IMPORTANTE, PROVA",
    concluida: true
  },
  {
    id: 2,
    data: "12/10/2020",
    tarefa: "Viagem para o Interior",
    tipo: "VIAGEM",
    concluida: true
  },
  {
    id: 3,
    data: "17/10/2020",
    tarefa: "Buscar roupa na lavanderia",
    tipo: "AFAZERES",
    concluida: false
  },
  {
    id: 4,
    data: "21/10/2020",
    tarefa: "Curso HSM",
    tipo: "CURSO",
    concluida: false
  }
  ];

  constructor() { }

  ngOnInit(): void {
    alert("Agenda de Carlos")
  }

  handleClick(event) {
    var obj_index: any;
    obj_index = this.info.indexOf(event)
    this.info[obj_index].concluida = !event.concluida
    alert(event.id);
  }
}
