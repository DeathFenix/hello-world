import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() evntEmmiter = new EventEmitter<number>();
  incNumber = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.evntEmmiter.emit( this.incNumber + 1 );
      this.incNumber++;
    }, 1000)
  }

  onPauseGame(){
    clearInterval(this.interval)
  }

 
}
