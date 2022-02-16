import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-alusul-rabe3-alawal1417',
  templateUrl: './alusul-rabe3-alawal1417.page.html',
  styleUrls: ['./alusul-rabe3-alawal1417.page.scss'],
})
export class AlusulRabe3Alawal1417Page implements OnInit {

  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
    forwardshow: boolean = true;
 ngOnInit() { 
  const url= 'https://strapi.alsader.net/api/aduruses?filters[adurus_cat][title][$eq]=bahes-kharej-ausul-rabi3-awal-1417&populate=*'
  this.http.get(url).subscribe((res)=>{
    this.data = res
    var i =0;
    for ( i=0; i< this.data.data.length; i++ ) {
     var array =[];
     array["title"] = this.data.data[i].attributes.title;
     array["link"] = this.data.data[i].attributes.link;
     this.content.push(array);      
    }
  })

  }
  
constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
    
 }
    ionViewWillEnter(){
        this.storage.get('page-aldurus').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-aldurus', 'alusul-rabe3-alawal1417');
        this.storage.get('alusul-rabe3-alawal1417-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('alusul-rabe3-alawal1417-mp3', link);
    }
    forwardLink(){
        this.storage.get('alusul-rabe3-alawal1417-mp3').then((link) => {
            var options = {
                bgColor: "#000000",
                bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
                bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
                initFullscreen: true, // true is default. iOS only.
                keepAwake: true, // prevents device from sleeping. true is default. Android only.
                successCallback: function() {
                    console.log("Player closed without error.");
                },
                errorCallback: function(errMsg) {
                    console.log("Error! " + errMsg);
                }
            };
            this.streamingMedia.playAudio(link, options);
        });
    }
 streamaudio(url: string){
    var options = {
    bgColor: "#000000",
    bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
    bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    initFullscreen: true, // true is default. iOS only.
    keepAwake: true, // prevents device from sleeping. true is default. Android only.
    successCallback: function() {
      console.log("Player closed without error.");
    },
    errorCallback: function(errMsg) {
      console.log("Error! " + errMsg);
    }
  };
  this.streamingMedia.playAudio(url, options);
            }
  
}

