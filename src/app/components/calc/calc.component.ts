import { Component} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  temporal = '';
  operacion = '';

  constructor() { }

  b0() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '0';
  }
  b1() {
     document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '1';
   }
   b2() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '2';
  }
  b3() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '3';
  }
  b4() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '4';
  }
  b5() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '5';
  }
  b6() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '6';
  }
  b7() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '7';
  }
  b8() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '8';
  }
  b9() {
    document.getElementById('pantalla').innerHTML = document.getElementById('pantalla').innerHTML + '9';
  }
  C() {
    document.getElementById('pantalla').innerHTML = '';
    this.temporal = '';
    this.operacion = '';
  }
  por() {
    if (this.temporal === '') {
        this.temporal = (Number( document.getElementById('pantalla').innerHTML)).toString();
        document.getElementById('pantalla').innerHTML = '';
        this.operacion = '*';
    } else {
        this.temporal = (Number( document.getElementById('pantalla').innerHTML)).toString();
        this.operacion = '*';
        this.igual();

    }
  }
  igual() {
    switch (this.operacion) {
      case '*':
      document.getElementById('pantalla').innerHTML = (this.temporal * Number( document.getElementById('pantalla').innerHTML)).toString();
        break;
        case '/':
      document.getElementById('pantalla').innerHTML = (this.temporal / Number( document.getElementById('pantalla').innerHTML)).toString();
          break;
      case '+':
      document.getElementById('pantalla').innerHTML = (this.temporal + Number( document.getElementById('pantalla').innerHTML)).toString();
        break;
      case '-':
      document.getElementById('pantalla').innerHTML = (this.temporal - Number( document.getElementById('pantalla').innerHTML)).toString();
        break;
      case '%':
      document.getElementById('pantalla').innerHTML = (this.temporal % Number( document.getElementById('pantalla').innerHTML)).toString();
        break;
        default:
        break;
    }
    this.operacion = '';
  }
}
