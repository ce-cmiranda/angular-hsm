import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() info: any;
  @Output() myClick = new EventEmitter();
  nameFilter = '';

  get my_info() {
    return this.info.filter(info => {
      return info.tarefa.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !==-1;
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

  callClick(e){
    this.myClick.emit(e);
  }
}
