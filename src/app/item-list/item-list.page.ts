import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { TabsComponent } from '../tabs/tabs.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule   } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsComponent, HeaderComponent, IonList, IonIcon, IonLabel, HttpClientModule]
})
export class ItemListPage implements OnInit {

  items: any[] = []; // Accepting dynamic input
  type: string = ''; // Item type (from URL)


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || ''; 
      this.loadItems();
    });
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
