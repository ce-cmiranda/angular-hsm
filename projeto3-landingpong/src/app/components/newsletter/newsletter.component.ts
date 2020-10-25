import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  name = '';
  email = '';
  constructor() { }

  ngOnInit(): void {
  }

  
  signNewsletter(){
    alert(
      this.name+" assinou a newsletter com o email: "+this.email
    )
  }

  titleCase(sentence) {
    sentence = sentence.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
    return sentence.join(" ");
  }

  focusOutFunction(e){
    var valor: string;
    valor = e.target.value;
    valor = this.titleCase(valor);
    this.name = valor;
  }
}
