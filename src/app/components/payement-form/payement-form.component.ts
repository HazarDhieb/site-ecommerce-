import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'src/app/mocks/buttons.mock';

@Component({
  selector: 'app-payement-form',
  templateUrl: './payement-form.component.html',
  styleUrls: ['./payement-form.component.css']
})
export class PayementFormComponent {
paymentForm!:FormGroup;
button!:Button;
validationError:String[] =[];
constructor(private formBuilder:FormBuilder,
  private router: Router
  ){}

ngOnInit(){
   this.initPayemntForm();
}
    initPayemntForm(){
    this.paymentForm=this.formBuilder.group({
        card_username:[null,[Validators.required]],
        card_number:[null,[Validators.required]],
        card_expiration:[null,[Validators.required]],
    card_cvv:[null,[Validators.required,Validators.pattern(/^[0-9]{3,4}$/gm),]]
    //regex mot clé pour voir les ligne de code pour la vérification
    })
}
pay(){
  
// ce qu'on fait si est invalide
this.validationError=[];
if(this.paymentForm.invalid){
    Object.keys(this.paymentForm.controls).forEach((input)=>{
        const currentInput=this.paymentForm.get(input);
        if(currentInput && currentInput.status==="INVALID"){
            this.validationError.push(input);
        }
    })

   }else{
//créer une commande de la creation 
//rediriger vers une page succés
this.router.navigate(['payment-success']);
   }
}
delete(){
    this.router.navigate(['delivery']);
}

}
