import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mawaezmaktuba',
  templateUrl: './mawaezmaktuba.page.html',
  styleUrls: ['./mawaezmaktuba.page.scss'],
})
export class MawaezmaktubaPage implements OnInit {

  public title;
  public link;
  public mawaez = [];

 ngOnInit() { 

  }
  
constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
    this.title = getXMLDataMawaez("title");
    this.link = getXMLDataMawaez("link");

     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var onemawaez =[];
     onemawaez["title"] = this.title[i];
     onemawaez["link"] = this.link[i];
     this.mawaez.push(onemawaez);
    }
 }

    moveToPage(pageName) {
      this.router.navigate([pageName]);
     }

}

function getXMLDataMawaez( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/mawaez-lekaat-xml/mawaeztitels.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var mawaez = doc.getElementsByTagName("mawaeztext");
    var result = [];
    for (var i = 0; i < mawaez.length; i++) {
      var mawaezname = mawaez[i];  
      
      result.push(mawaezname.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
  
    return result;
  }
  
  return '';

}

