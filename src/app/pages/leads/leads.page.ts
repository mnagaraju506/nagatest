import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/services/menus/menus.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {
  constructor(private menuService: MenusService) {}

  public ngOnInit(): void {
    this.menuService.enableMenu();
  }
}
