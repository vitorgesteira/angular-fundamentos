import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Vitor"
  dataNascimento = "1988-04-02"
  urlImagem = "/assets/joao-de-barro.JPG"

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`)
  }
}
