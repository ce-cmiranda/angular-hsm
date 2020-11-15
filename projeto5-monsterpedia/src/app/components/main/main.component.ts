import { Component, OnInit } from '@angular/core';
import { ApiMonstrinhosService } from 'src/app/services/api-monstrinhos.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiMonstrinhos: ApiMonstrinhosService) { }

  data;
  lideres = false;
  medalhas = false;
  monstros = true;
  region = "sul"

  updateRegion(myregion){
    if (myregion != this.region){
      this.region = myregion
      this.updateMonstros()
    }
  }
  
  updateMonstros(){
    this.apiMonstrinhos.getMonsters(this.region,'monstros').subscribe(
      (dados) => {
        console.log(dados)
        this.data = dados
      },
      (error) => console.log(error),
    )
  }
  ngOnInit(): void {

    this.updateMonstros()
  }

}
