import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-maktabat-alsayed',
  templateUrl: './maktabat-alsayed.page.html',
  styleUrls: ['./maktabat-alsayed.page.scss'],
})
export class MaktabatAlsayedPage implements OnInit {

  ngOnInit() { 

  }
  
constructor(private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
 }
 moveToPage(pageName) {
  setTimeout( () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
  }, 350);
  
 }


}