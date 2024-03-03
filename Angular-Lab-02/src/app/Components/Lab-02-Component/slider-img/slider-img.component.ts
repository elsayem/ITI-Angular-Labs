import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.component.html',
  styleUrls: ['./slider-img.component.css']
})
export class SliderImgComponent {
  imgsUrl:string[]= ["/assets/Images/1-slider.jpg","/assets/Images/slider-02.jpg","/assets/Images/slider-03.jpg"]
  
  currentImg:string = this.imgsUrl[0]
  counter:number = 0
  playInterval:any;

Next(){
  this.counter++
    if(this.counter==this.imgsUrl.length){
      this.counter=0
    }
  this.currentImg = this.imgsUrl[this.counter]  
    }

    Previous(){
      this.counter--

      if(this.counter<0){
        this.counter=this.imgsUrl.length -1

      }

      this.currentImg = this.imgsUrl[this.counter]  
    }


    Play(){
      this.playInterval = setInterval(()=>this.Next() ,1000);
    }
    Stop(){
      clearInterval(this.playInterval)
    }




}
