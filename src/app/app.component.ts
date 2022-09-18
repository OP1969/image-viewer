import { Component, ViewChild } from '@angular/core';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageViewer Demo';
  @ViewChild('galleryImageViewer') imageViewer!: ImageViewerComponent;

  images = [
    {
        id: 1,
        name: 'Image1',
        description: 'This is Image1',
        content: './assets/images/Loganlea_July2020.jpg',
        thumbnail: './assets/images/tn_Loganlea_July2020.jpg'
    },{
        id: 2,
        name: 'Image2',
        description: 'This is Image2',
        content: './assets/images/CastleLaw_July2020.jpg',
        thumbnail: './assets/images/tn_CastleLaw_July2020.jpg'
    },{
      id: 3,
      name: 'Image3',
      description: 'This is Image2',
      content: './assets/images/BlackHill_Aug2020.jpg',
      thumbnail: './assets/images/tn_BlackHill_Aug2020.jpg'
    },{
      id: 4,
      name: 'Image3',
      description: 'This is Image2',
      content: './assets/images/Tinto_Sep2020.jpg',
      thumbnail: './assets/images/tn_Tinto_Sep2020.jpg'
    },{
      id: 5,
      name: 'Image3',
      description: 'This is Image2',
      content: './assets/images/BenLomond_Sep2020.jpg',
      thumbnail: './assets/images/tn_BenLomond_Sep2020.jpg'
    },{
      id: 6,
      name: 'Image3',
      description: 'This is Image2',
      content: './assets/images/BraidHills_Oct2020.jpg',
      thumbnail: './assets/images/tn_BraidHills_Oct2020.jpg'
    }
  ];

  openImageViewer(id: number){
    this.imageViewer.openImageViewer(id);
  }

  closeimageViewer(){
    this.imageViewer.closeImageViewer();
  }
}
