import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.scss']
})

// Add your rxjs imports here
/*
* Update the four slideshow's images.
*/

export class Question5Component implements OnInit {

  hasStarted: boolean = false;
  imagesArr: any[] = [];
  hasLoaded: boolean = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

      this.getAllImages().subscribe( data => {
        this.imagesArr = data;
        this.updateImages(this.imagesArr[0],this.imagesArr[1],this.imagesArr[2],this.imagesArr[3]);
      });
      
  }

  public getAllImages(): Observable<any> {

    const apiUrl: string = "https://dog.ceo/api/breeds/image/random/4";

    return this.httpClient.get<any>(apiUrl).pipe(map(i => i.message));
  }


  updateImages(link0: string, link1: string, link2: string, link3: string):void {

    let links: string[] = [link0, link1, link2, link3];

    this.hasLoaded = true;
    document.getElementById("slideshow").childNodes.forEach((node: ChildNode) => {
      let element: HTMLElement = node as HTMLElement;
      if (node.nodeType == Node.ELEMENT_NODE) {
        if (links.length) {
          element.style.backgroundImage = "url('" + links.shift() + "')"; 
        }
  
      }  
      setTimeout(() => {
          if(links.length < 1) {
          this.hasLoaded = false;
          }
      }, 1000)
    });

  }

  toggleSlider() {
    this.hasStarted = !this.hasStarted;

    const interval = setInterval(() => {

      if(this.hasStarted) {
        this.getAllImages().subscribe( data => {
          this.imagesArr = data;
          this.updateImages(this.imagesArr[0],this.imagesArr[1],this.imagesArr[2],this.imagesArr[3]);
        });

      } else {
        clearInterval(interval)
      }

    }, 5500)

  }

}
