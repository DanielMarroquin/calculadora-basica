import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación Calculadora';

  resultadoPadre: number = 0;
  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }

}
