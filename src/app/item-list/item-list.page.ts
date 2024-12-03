import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/angular/standalone';
import { TabsComponent } from '../tabs/tabs.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule   } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsComponent, HeaderComponent, IonList, IonIcon, IonLabel, HttpClientModule, RouterModule, ContainerComponent]
})
export class ItemListPage implements OnInit {

  items: any[] = [];
  type: string = ''; 


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || ''; 
      this.loadItems();
    });
  }

  goBack() {
    this.navCtrl.back(); 
  }

  loadItems() {
    const filePath = 'assets/json/bateau.json';

    this.http.get<any>(filePath).subscribe(
      (data) => {
        this.items = data[this.type] || [];
      },
      (error) => {
        console.error('Failed to load items.json', error);
        this.items = []; 
      }
    );
  }
}
