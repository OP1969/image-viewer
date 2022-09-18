import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bsbo-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  @ViewChild('imageViewer') imageViewer!: ElementRef;
  @ViewChild('imageViewerContainer') imageViewerContainer!: ElementRef;
  @ViewChild('imageViewerContent') imageViewerContent!: ElementRef;
  @ViewChild('imageViewerImage') imageViewerImage!: ElementRef;

  currentImage = '';
  currentIndex = 0;

  @Input('images') images: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  openImageViewer(id: number) {
    this.imageViewer.nativeElement.style.display = "flex";
    this.imageViewerContainer.nativeElement.style.display = "flex";
    this.imageViewerContent.nativeElement.style.display = "block";
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
  
  closeImageViewer() {
    this.imageViewer.nativeElement.style.display = "none";
    this.imageViewerContainer.nativeElement.style.display = "none";
    this.imageViewerContent.nativeElement.style.display = "none";
    this.currentImage = '';
  }

}
