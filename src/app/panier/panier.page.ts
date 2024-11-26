import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton, IonLabel } from '@ionic/angular/standalone';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel, IonCardTitle, HeaderComponent, TabsComponent]
})
export class PanierPage implements OnInit {
  produits_dans_panier: any[] = [];
  dbz = [
    {
      name: "goku",
      race: "saiyan"
    },
    {
      name: "piccolo",
      race: "namek"
    },
    {
      name: "krilin",
      race: "humain"
    },
    {
      name: "C16",
      race: "cyborg"
    }
  ]
  // panier aura un service , qui a une liste represenetant le panier et ds liste produit quand on click ca envoie sur le service panier
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.produits_dans_panier.push(this.dbz[0]);
    this.produits_dans_panier.push(this.dbz[3]);
    //this.produits_dans_panier.push(this.dbz[2]);
  }

  onLoadProduit(produit: {name: string, race: string}) {
    let navigationExtras: NavigationExtras = {
      state: {
        produit:produit
      }
    };
    // voir le detail produit
    this.router.navigate(['/#'], navigationExtras);
    // supprimer le produit du panier
  }

}
