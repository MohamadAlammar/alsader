import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';


@Component({
  selector: 'app-khotab-jmaa-video',
  templateUrl: './khotab-jmaa-video.page.html',
  styleUrls: ['./khotab-jmaa-video.page.scss'],
})
export class KhotabJmaaVideoPage implements OnInit {
  forwardshow: boolean = true;
  public title;
  public link;
  public video   = [];
 ngOnInit() { 

  }
constructor(private videoPlayer: VideoPlayer,private translate: TranslateService,private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
    this.title = getXMLDataVideo("title");
    this.link = getXMLDataVideo("link");

     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var onevideo =[];
     onevideo["title"] = this.title[i];
     onevideo["link"] = this.link[i];
     this.video.push(onevideo);
    }
 }
    ionViewWillEnter(){
        this.storage.get('page-khotab-alsayed').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-khotab-alsayed', 'khotab-jmaa-video');
        this.storage.get('khotab-alsayed-mp4').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('khotab-alsayed-mp4', link);
    }

    forwardLink(){
        this.storage.get('khotab-alsayed-mp4').then((link) => {
            var options: StreamingVideoOptions = {
                successCallback: () => { console.log('Video played') },
                errorCallback: (e) => { console.log('Error streaming') },
                orientation: 'landscape',
                shouldAutoClose: true,
                controls: true
            };
            this.streamingMedia.playVideo(link, options);
        });
    }

 moveToPage(pageName) {
  setTimeout( () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
  }, 200);
  
 }

  streamvideo(url: string){
  var options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
  };
  this.streamingMedia.playVideo(url, options);
  }
}

function getXMLDataVideo( itemname:string ) {
  var request = new XMLHttpRequest();
  try {
            request.open('GET', 'assets/videos-xml/khotbaljmaavideos.xml', false);
            request.send(null);
        } catch (err) {
            return '';
    }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var videos = doc.getElementsByTagName("video");
    var result = [];
    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];  
      
      result.push(video.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
  
    return result;
  }
  
  return '';

}
