import { Component,Input } from '@angular/core';
import { Button } from 'src/app/mocks/buttons.mock';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

@Input() button!: Button;

}
