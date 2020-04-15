import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';



@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})


export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(1500).fill(0);
  animacion: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
    this.animacion = true;

  }
  irPrincipio() {
    this.viewport.scrollToIndex(0);
    this.animacion = true;

  }
  irCentro() {
    this.viewport.scrollToIndex(this.personas.length / 2);
    if( this.animacion === true ) {
      this.animacion = false;
    }
    this.animacion = true;
    console.log(this.animacion);

  }
}
