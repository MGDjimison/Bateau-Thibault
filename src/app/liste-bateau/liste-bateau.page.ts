import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import du Router
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonAvatar, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';

@Component({
  selector: 'app-liste-bateau',
  templateUrl: './liste-bateau.page.html',
  styleUrls: ['./liste-bateau.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonLabel, IonAvatar, HeaderComponent, TabsComponent, IonIcon]
})
export class ListeBateauPage implements OnInit {

  constructor(private router: Router) { } // Injection du Router

  ngOnInit() {
  }

  // Méthode pour naviguer vers une autre page
  navigateToBateau(bateauId: string): void {
    this.router.navigate(['/bateau-details', bateauId]); // Navigue vers la page avec un ID
    
  }
}
