import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  leftScreenIsVisible = true;
  rightScreenIsVisible = false;
  rightScreen = "right-scr";
  leftScreen = "left-scr";
  buttonLeft = "left-btn";
  buttonRight = "right-btn";
  buttonActive= "btn-active";
  hide = "hide";

  constructor() { }

  ngOnInit(): void {
    // CSS set up
    this.initCss();
  }



  onClickSubmit(result: any) {
    console.log("You have entered : " + result.email); 
 }













  //  CSS Mobile set-up
  initCss(){
    var element = document.getElementById(this.leftScreen);
    var switchElement  = document.getElementById(this.rightScreen);
    var btnLeft = document.getElementById(this.buttonLeft);
    var btnRight = document.getElementById(this.buttonRight);

    element?.classList.remove(this.hide);
    switchElement?.classList.add(this.hide);
    
    btnRight?.setAttribute('disabled', '');
    btnLeft?.classList.add(this.buttonActive);


  }

  changeVisibilityScreen() {
    var element = document.getElementById(this.leftScreen);
    var switchElement  = document.getElementById(this.rightScreen);
    var btnLeft = document.getElementById(this.buttonLeft);
    var btnRight = document.getElementById(this.buttonRight);

    
    if(this.leftScreenIsVisible){
      element?.classList.add(this.hide);
      switchElement?.classList.remove(this.hide);
      
      btnLeft?.setAttribute('disabled', '');
      btnRight?.classList.add(this.buttonActive);

      btnRight?.removeAttribute('disabled');
      btnLeft?.classList.remove(this.buttonActive);

    }else{
      element?.classList.remove(this.hide);
      switchElement?.classList.add(this.hide);

      btnRight?.setAttribute('disabled', '');
      btnLeft?.classList.add(this.buttonActive);

      btnLeft?.removeAttribute('disabled');
      btnRight?.classList.remove(this.buttonActive);
    }
    this.leftScreenIsVisible = this.rightScreenIsVisible;
    this.rightScreenIsVisible = !this.leftScreenIsVisible;
  }


}
