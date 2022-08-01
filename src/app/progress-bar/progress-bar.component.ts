import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input () step? : number;
  @Input () totalSteps? : number;

  constructor() { }

  ngOnInit(): void {
    var element = document.getElementById("progress-bar");
    if(!this.totalSteps){
      element?.setAttribute('value', "1");      
      element?.setAttribute('max', "1");
    } 
  }


  ngOnChanges(){

  }

}
