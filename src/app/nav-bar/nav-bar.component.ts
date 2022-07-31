import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  element?: any;
  menuIcon = "../../assets/close-menu-icon.png";
  constructor() { }

  ngOnInit(): void {
  }
















  // Css set up
  displayNavbar() {
    this.element = document.getElementById("myLinks");

    if (this.element.style.display === "block") {
      this.element.style.display = "none";
      this.menuIcon = "../../assets/close-menu-icon.png";
    } else {
      this.element.style.display = "block";
      this.menuIcon = "../../assets/open-menu-icon.png";
    }
  }

}
