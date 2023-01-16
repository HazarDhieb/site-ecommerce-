import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PayementTotalComponent } from '../payement-total/payement-total.component';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent {
  deliveryForm!: FormGroup;
  deliveryChoice!: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private payment: PayementTotalComponent) { }

  ngOnInit() {
    // this.createForm();
  }

  @Output() onItemChange = new EventEmitter();

  itemChange(value: any) {
    this.deliveryChoice = value.target.defaultValue;
    this.onItemChange.emit(this.deliveryChoice);
    // this.payment.getTotal("Gratuit");
    // console.log("hello");
    // console.log(this.deliveryChoice);
  }
}
