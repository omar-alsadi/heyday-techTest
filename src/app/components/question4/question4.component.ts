import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  initialCount: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {

    // increment the current value + 1
    this.initialCount++;

    // Getting the page dimensions
    const pageWidth = document.body.offsetWidth;
    const pageHeight = document.body.offsetHeight;

    // Getting the button dimensions
    let currentWidth;
    let currentHeight;

    const counterButton = document.querySelector<HTMLElement>('#counter-button');

    currentWidth = counterButton.style.width;
    currentHeight = counterButton.style.height;
    
    currentWidth = this.initialCount * 50;
    currentHeight = this.initialCount * 50;
    
    if ( (currentWidth >= pageWidth) || (currentHeight >= pageHeight)) {
      this.initialCount = 1;
      counterButton.style.width = '50px'; 
      counterButton.style.height = '50px';
    } else {
      counterButton.style.width = `${currentWidth}px`;
      counterButton.style.height = `${currentHeight}px`;
    }

  }

}
