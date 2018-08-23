import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menu() {
    document.getElementById('home').innerHTML = `<form class="letra_blanca opa container" style="height: 750px;">
    <div class="row">
        <div class="col-3 my-5">
            <a href="#calc">
                <img src="./../../../assets/img/icono_8.png" class="img-fluid" alt="Responsive image">
            </a>
        </div>
        <div class="col-3 my-5">
            <a href="#note">
                <img src="./../../../assets/img/icono_2.png" class="img-fluid" alt="Responsive image">
            </a>
        </div>
        <div class="col-3 my-5">
            <a href="#id">
                <img src="./../../../assets/img/icono_9.png" class="img-fluid" alt="Responsive image">
            </a>
        </div>
    </div>
    <div class="fixed-bottom">
   
    <img src="./../../../assets/img/butons.png" class="img-fluid" alt="Responsive image" onclick="location.reload()">

    </div>
</form>`;
  }

}
