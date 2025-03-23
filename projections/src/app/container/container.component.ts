import { Component, contentChild, ContentChild, ElementRef, effect } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  //@ContentChild("header1") header1!: ElementRef<HTMLHeadingElement>
  header1 = contentChild<ElementRef>("header1")

  constructor() {
    effect(() => {
      console.log("header initial", this.header1())
      if (this.header1() !== undefined) {
        console.log("header", this.header1()?.nativeElement.innerText)
      }
    })
  }

}
