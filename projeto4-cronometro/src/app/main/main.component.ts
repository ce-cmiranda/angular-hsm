import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  inscricaoObservable: Subscription;

  constructor() { }

  value = 0;

  construirCronometro(){
    setInterval(() => {
      alert('Já se passaram '+this.value+' segundos')
      }, 30000)
    }

    inicarCronometro(){
      setInterval(() => {
          this.value += 1;
        }, 1000)
      }
  ngOnInit(): void {
    this.inicarCronometro();
    this.construirCronometro();
  }


}
