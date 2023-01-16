import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'src/app/mocks/buttons.mock';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
    selector: 'app-payement-form',
    templateUrl: './payement-form.component.html',
    styleUrls: ['./payement-form.component.css']
})
export class PayementFormComponent {
    paymentForm!: FormGroup;
    button!: Button;
    validationError: String[] = [];
    cart: CartProduct[] = [];


    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private cartService: CartService,
    ) { }

    ngOnInit() {
        this.initPaymentForm();
        this.getCart();
        if(this.cartService.productQuantity === 0){
          this.router.navigate(['/cart']);
        }
    }

    getCart(){
        this.cart = this.cartService.getCart();
      }
    
    initPaymentForm() {
        this.paymentForm = this.formBuilder.group({
            card_username: [null, [Validators.required]],
            card_number: [null, [Validators.required]],
            card_expiration: [null, [Validators.required]],
            card_cvv: [null, [Validators.required, Validators.pattern(/^[0-9]{3,4}$/gm),]]
            //regex mot clé pour voir les ligne de code pour la vérification
        })
    }
    pay() {

        // ce qu'on fait si est invalide
        this.validationError = [];
        if (this.paymentForm.invalid) {
            Object.keys(this.paymentForm.controls).forEach((input) => {
                const currentInput = this.paymentForm.get(input);
                if (currentInput && currentInput.status === "INVALID") {
                    this.validationError.push(input);
                }
            })

        } else {
            //créer une commande de la creation 
            //rediriger vers une page succés
            localStorage.removeItem('cart');
            this.router.navigate(['/payment-success']);
            // this.cartService.getCart();

        }
    }
    delete() {
        this.router.navigate(['/delivery']);
    }

}
