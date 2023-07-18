import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  // -----------------------------------------------
  // --------------  VARIABLES  --------------------
  // -----------------------------------------------
  @Input() isCorrect: Boolean = false;


  // -------------------------------------------------
  // --------------  CONSTRUCTOR  --------------------
  // -------------------------------------------------
  constructor(private ef: ElementRef, private render: Renderer2) { }


  // ---------------------------------------------
  // --------------  METHODS  --------------------
  // ---------------------------------------------
  @HostListener('click') answer() {

    if (this.isCorrect) {
      this.render.setStyle(this.ef.nativeElement, 'background', '#00800059'); // green
      this.render.setStyle(this.ef.nativeElement, 'color', '#fff');
      this.render.setStyle(this.ef.nativeElement, 'border', '2px solid grey');
    }
    else {
      this.render.setStyle(this.ef.nativeElement, 'background', '#ff00004e'); // red
      this.render.setStyle(this.ef.nativeElement, 'color', '#fff');
      this.render.setStyle(this.ef.nativeElement, 'border', '2px solid grey');
    }

  }

}
