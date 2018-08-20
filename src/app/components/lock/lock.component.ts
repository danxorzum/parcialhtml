import { Component, OnInit } from '@angular/core';
import { dirtyParentQueries } from '../../../../node_modules/@angular/core/src/view/query';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {
  date;
  constructor(private _router: Router) {
    this.date = this.fecha();
  }

  ngOnInit() {
  }
  fecha() {
    const DATE: Date = new Date();
    // tslint:disable-next-line:max-line-length
    const MES: any[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    // tslint:disable-next-line:prefer-const
    let resp: any[] = [];
    // tslint:disable-next-line:prefer-const
    let m = DATE.getMinutes();
    // tslint:disable-next-line:prefer-const
    let h = DATE.getHours();
    // tslint:disable-next-line:prefer-const
    let date = `${DATE.getDate()} de ${MES[DATE.getMonth()]}`;
    if (m < 10) {
      m = `0${m}`;
    }
    resp.push(h.toString());
    resp.push(m.toString());
    resp.push(date.toString());
    return resp;
  }
  password() {
    console.log('alv puto');
    document.getElementById('reloj').innerHTML = (`<form class="letra_blanca opa container" style="height: 750px;">
    <div class="form-group container my-5">
    <div class="container my-5">
    <div class="my-5">
    <br>
    <div class="my-5">
    <br>
    <div class="my-5" (click)=popo()>
        <label class="my-5" for="exampleInputPassword1">Introduce tu contraseña</label>
        <input style="background: rgba(0, 0, 0, 0)" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        <hr style="border-color: white">
        </div>
    <button type="button" class="btn btn-outline-dark"  (click)=logi()>Confirmar</button>
</form>`).toString();
  } //le pone comillas a la wea
  logi(value) {
    console.log('alv puto');
    if (value === 'alv') {
    this._router.navigate(['calc']);
    }
  }

}
