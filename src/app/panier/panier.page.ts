import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonPicker, IonItem, IonLabel, IonList, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from 'ionicons';
import { closeCircleOutline, arrowBack, arrowBackCircleOutline } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [ ContainerComponent ,HttpClientModule ,IonSelect, IonSelectOption,RouterModule ,IonIcon, IonLabel, IonItem, IonPicker, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList]
})
export class PanierPage implements OnInit {

  items: any[] = [];
  restaurants: any[] = []

  total: number = NaN

  selectedDeliveryPoint: string = '';

  constructor(private http: HttpClient, private router: Router, private navCtrl: NavController) {
    addIcons({arrowBackCircleOutline,closeCircleOutline,arrowBack});
   }

  ngOnInit() {
    this.loadItems()
    this.refreshList()
  }

  order() {
    if (this.selectedDeliveryPoint) {
      console.log('Order confirmed with delivery point:', this.selectedDeliveryPoint);
      localStorage.clear();
      this.router.navigate(['/home']);
    }
  }

  goBack() {
    this.navCtrl.back(); 
  }

  loadItems() {
    const filePath = 'assets/json/bateau.json';

    this.http.get<any>(filePath).subscribe(
      (data) => {
        this.restaurants = data["restaurants"] || [];
        console.log(this.restaurants)
      },
      (error) => {
        console.error('Failed to load items.json', error);
        this.restaurants = []; 
      }
    );
  }
  
  ionViewWillEnter() { this.refreshList(); }


  getFromStorage(): { id: string; quantite: number; [key: string]: any }[] {
    const key = 'produits';
  
    try {
      const storedData = localStorage.getItem(key);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        return parsedData;
      }
      return [];
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
      return [];
    }
  }

  deleteFromStorage(produitId: number) {
    const key = 'produits';
    const produitsString = window.localStorage.getItem(key);
    if (produitsString) {
        const produits: { id: number; quantite: number; [key: string]: any }[] = JSON.parse(produitsString);
        
        const updatedProduits = produits.filter(item => item.id !== produitId);

        window.localStorage.setItem(key, JSON.stringify(updatedProduits));
        console.log('Produit deleted:', produitId);
        console.log('Updated produits:', updatedProduits);
    } else {
        console.log('No produits found in localStorage to delete.');
    }
    this.refreshList();
}

  refreshList() { this.items = this.getFromStorage(); }



}
