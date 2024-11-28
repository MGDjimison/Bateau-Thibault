import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption ,IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { TabsComponent } from '../tabs/tabs.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from '../container/container.component';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.page.html',
  styleUrls: ['./item-card.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption , IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, HeaderComponent, TabsComponent, HttpClientModule, ContainerComponent]
})
export class ItemCardPage implements OnInit {

  selectedQuantite: number = 0;

  item: any = undefined

  type: string = ''; 

  id: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type') || ''; 
      this.id = params.get('id') || ''; 
      console.log(this.id)
      console.log(this.type)
      this.loadItem();
    });

    console.log("LocalStorage : ", localStorage.getItem('produits'))
  }

  range(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i+1);
  }

  updateQuantite(event: any): void {
    console.log("here")
    this.selectedQuantite = parseInt(event.detail.value, 10);
  }

  loadItem() {
    const filePath = 'assets/json/bateau.json';

    this.http.get<any>(filePath).subscribe(
      (data) => {
        data = data[this.type]
        this.item = data.find((element: any) => element.id === Number(this.id)) || []; 
      },
      (error) => {
        console.error('Failed to load items.json', error);
        this.item = {}; 
      }
    );
  }

  saveToStorage(produit: { id: string; [key: string]: any }, quantite: number) {
    const key = 'produits';
    const produitsString = window.localStorage.getItem(key);
    const produits: { id: string; quantite: number }[] = produitsString ? JSON.parse(produitsString) : [];

    const existingProductIndex = produits.findIndex((item: { id: string; quantite: number }) => item.id === produit.id);

    if (existingProductIndex !== -1) {
        produits[existingProductIndex].quantite += quantite;
    } else {
        const updatedProduit = { ...produit, quantite };
        produits.push(updatedProduit);
    }

    window.localStorage.setItem(key, JSON.stringify(produits));
    this.router.navigate(['/panier']);
}


}
