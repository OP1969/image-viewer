import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bsbo-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  @ViewChild('lightbox') lightbox!: ElementRef;
  @ViewChild('lightboxContainer') lightboxContainer!: ElementRef;
  @ViewChild('lightboxContent') lightboxContent!: ElementRef;
  @ViewChild('lightboxImage') lightboxImage!: ElementRef;

  currentImage = '';
  currentIndex = 0;

  @Input('images') images: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  openLightbox(id: number) {
    this.lightbox.nativeElement.style.display = "flex";
    this.lightboxContainer.nativeElement.style.display = "flex";
    this.lightboxContent.nativeElement.style.display = "block";
    this.currentImage = '';
    this.currentIndex = 0;
    for (let image of this.images) {
      if (image.id == id) {
        this.currentImage = image.content;
        break;
      }
      this.currentIndex++;
    }
  }

  showNextImage() {
    if (this.currentIndex >= this.images.length - 1) {
      this.currentIndex = 0;
    }
    else {
      this.currentIndex++;
    }
    this.currentImage = this.images[this.currentIndex].content;
  }

  showPreviousImage() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.images.length - 1;
    }
    else {
      this.currentIndex--;
    }
    this.currentImage = this.images[this.currentIndex].content;
  }
  
  closeLightbox() {
    this.lightbox.nativeElement.style.display = "none";
    this.lightboxContainer.nativeElement.style.display = "none";
    this.lightboxContent.nativeElement.style.display = "none";
    this.currentImage = '';
  }

}
