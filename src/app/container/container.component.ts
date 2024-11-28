import { Component, OnInit } from '@angular/core';
import { IonIcon ,IonButton , IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { TabsComponent } from '../tabs/tabs.component';
import { NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBack, arrowBackCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  imports: [IonIcon ,IonButton, IonContent, HeaderComponent, TabsComponent]
})
export class ContainerComponent  implements OnInit {

  constructor(private navCtrl: NavController) {
    addIcons({arrowBackCircleOutline,arrowBack});
  }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); 
  }

}
