import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../header/header.component";
import { addIcons } from 'ionicons';
import { call, logoFacebook, mailOutline } from 'ionicons/icons';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ContactsPage implements OnInit {

  constructor() { 
    addIcons({call,logoFacebook,mailOutline});
  }

  ngOnInit() {
  }

}
