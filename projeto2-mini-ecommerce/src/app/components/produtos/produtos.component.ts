import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @Input() produto: any;
  @Output() myClick = new EventEmitter();
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  callClick(e){
    this.myClick.emit(e);
  }

}
