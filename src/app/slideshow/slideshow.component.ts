import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  srcs:string[] =["https://duckduckgo.com/?q=cat&t=canonical&iar=images&iax=images&ia=images&iai=http%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F03%2Ffluffy-cat-bone-bone-thai-18-58de0130c4e49__700.jpg",
  "https://img14.deviantart.net/9472/i/2006/310/c/2/pallas_cat_by_originalspacecowgirl.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/European_shorthair_cat_portrait.jpg"]
  constructor() { }

  ngOnInit() {
  }

}
