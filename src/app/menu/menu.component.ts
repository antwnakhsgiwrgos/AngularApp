import { Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public title: string = "Bigoof";
  public num: number = 69;

  public menu: (string|number)[] = ["Home", "About", "Products", "Contact"];

}
