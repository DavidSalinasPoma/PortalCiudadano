import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Regresar al inicio
    window.scroll({
      top: 0,
      // left: 100,
      behavior: 'auto'
    });

  }

}
