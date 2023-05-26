import { Component } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuProperties: Menu[] = [
    {
      id: '1',
      titre: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      url: '#',
      expanded: false,
      sousMenu: [
        {
          id:'11',
          titre: 'Vue d\'ensemble',
          url: '#'
        },
        {
          id:'12',
          titre: 'Statistiques',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: '#',
      expanded: false,
      sousMenu: [
        { id:'21',
          titre: 'Products',
          url: 'products'
        },
        {
          id:'22',
          titre: 'Mouvement',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Fournisseurs',
      icon: 'fas fa-truck',
      url: '#',
      expanded: false,
      sousMenu: [
        {
          id:'31',
          titre: 'Fournisseurs',
          url: 'fournisseurs'
        },
        {
          id:'32',
          titre: 'Commandes Fournisseurs',
          url: 'commandesfournisseur'
        }
      ]
    },
    {
      id: '4',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '#',
      expanded: false,
      sousMenu: [
        {
          id:'41',
          titre: 'Clients',
          url: 'clients'
        },
        {
          id:'42',
          titre: 'Commandes Clients',
          url: 'commandesclient'
        }
      ]
    },
    {
      id: '5',
      titre: 'Categories',
      icon: 'fas fa-list',
      url: '#',
      expanded: false,
      sousMenu: [
        {
          id:'51',
          titre: 'categories',
          url: 'categories'
        }
      ]
    }
  ];
  constructor(private router:Router){
    
  }
  ngOnInit(): void{

  }

  navigate(url?: String) {
    this.router.navigate([url]);  }
    
}