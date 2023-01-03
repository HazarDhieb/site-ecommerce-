import { Component } from '@angular/core';
import { SERVICE, Service } from 'src/app/mocks/services.mock';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = SERVICE;
}
