import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/services/menus/menus.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  constructor(private menuService: MenusService, private nav: NavController) {}

  public ngOnInit(): void {
    this.menuService.enableMenu();
  }

  public navigateToDashboard(): void {
    this.nav.navigateRoot('dashboard');
  }
}
