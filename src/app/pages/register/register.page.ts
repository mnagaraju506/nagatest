import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/services/menus/menus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private menuService: MenusService) {}

  public ngOnInit(): void {
    this.menuService.disableMenu();
  }
}
