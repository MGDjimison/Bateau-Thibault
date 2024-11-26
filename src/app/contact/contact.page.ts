
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonAvatar, IonIcon, } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonLabel, IonAvatar, HeaderComponent, TabsComponent, IonIcon]
})
export class ContactPage implements OnInit {

  // Propriétés pour gérer les informations de contact
  contactInfo = {
    email: 'lebateaudethibault@gmail.com',
    facebookUrl: 'https://www.facebook.com/lebateaudethibault',
    phoneNumber: '+330663999978',
    address: 'Ton adresse ici, par exemple: 123 Rue de la Mer, Paris'
  };

  constructor() { }

  ngOnInit() {
    // Logique d'initialisation si nécessaire
  }

}