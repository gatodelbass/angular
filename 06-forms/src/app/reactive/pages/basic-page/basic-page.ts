import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.html',
})
export class BasicPage {
  fb = inject(FormBuilder);

  formUtils = FormUtils;

  theForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []], // 1 valor inicial, 2 valores sincronos, 3 valores asincronos
    price: [0, [Validators.required, Validators.min(10)]],
    quantity: [0, [Validators.required, Validators.min(0)]],
  });

  // isValidField(fieldName: string): boolean | null {
  //   return (!!this.theForm.controls[fieldName].errors && 
  //     this.theForm.controls[fieldName].touched);
  // }

  // getFieldError(fieldName: string): string | null {
  //   if (!this.theForm.controls[fieldName]) return null;

  //   const errors = this.theForm.controls[fieldName].errors ?? {};
  //   for (const key of Object.keys(errors)) {
  //     switch (key) {
  //       case 'required':
  //         return 'este campo es requerido';
  //       case 'minlength':
  //         return `este campo debe tener minimo ${errors['minlength'].requiredLength} caracteres`;

  //       case 'min':
  //         return `este campo debe tener un valor minimo de ${errors['min'].min} `;

  //       default:
  //         break;
  //     }
  //   }

  //   return null;
  // }

  onSave(){

    if(this.theForm.invalid){
 this.theForm.markAllAsTouched();
 return;
    }

    this.theForm.reset();
   
  }

  // theForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   quantity: new FormControl(0),
  // });
}
