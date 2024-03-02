//viewChild:
<input type="text" #inputElement>
<button (click)="focusInput()">Focus on Input</button>


//TS:
@ViewChild('inputElement') inputElRef: ElementRef;

focusInput() {
  this.inputElRef.nativeElement.focus();
}

//viewChildren:
<div #divElement>Div 1</div>
<div #divElement>Div 2</div>
<button (click)="logDivs()">Log Div Elements</button>

//TS:
@ViewChildren('divElement') divs: QueryList<ElementRef>;

  logDivs() {
    this.divs.forEach(div => console.log(div.nativeElement.textContent));
  }



//reactive form:
//HTML
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <div>
    <label>Name:</label>
    <input type="text" formControlName="name">
    <div *ngIf="myForm.get('name').errors?.['required']">
      Name is required.
    </div>
    <div *ngIf="myForm.get('name').errors?.['minLength']">
      Name must be at least 2 characters long.
    </div>
  </div>

  <div>
    <label>Email:</label>
    <input type="email" formControlName="email">
    <div *ngIf="myForm.get('email').errors?.['required']">
      Email is required.
    </div>
    <div *ngIf="myForm.get('email').errors?.['email']">
      Please enter a valid email.
    </div>
  </div>

  <div formGroupName="address">
    <div>
      <label>Street:</label>
      <input type="text" formControlName="street">
    </div>
    <!-- Additional address fields here -->
  </div>

  <button type="submit">Submit</button>
</form>

//TS with validation:
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}


//validation of 2nd type
export class RegisterComponent {
    registerForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    }
  
    onSubmit() {
      if (this.registerForm.valid) {
        console.log('Form Submitted!', this.registerForm.value);
      } else {
        console.log('Form is not valid');
      }
    }
  }



  //form control & form array:
  //form control
  import { FormControl } from '@angular/forms';

export class UserProfileComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
}

<input type="email" [formControl]="email">
<div *ngIf="email.invalid && email.touched">
  <p *ngIf="email.errors?.['required']">Email is required.</p>
  <p *ngIf="email.errors?.['email']">Please enter a valid email address.</p>
</div>



//form array:
<div formArrayName="siblings">
  <div *ngFor="let sibling of siblings.controls; let i = index" [formGroupName]="i">
    <input type="text" [formControlName]="i">
  </div>
</div>
<button (click)="addSibling()">Add Sibling</button>


import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class UserFamilyComponent {
  // Create a form group to hold the FormArray
  userForm = new FormGroup({
    siblings: new FormArray([])
  });

  // Getter for easy access to the siblings FormArray from the template
  get siblings() {
    return this.userForm.get('siblings') as FormArray;
  }

  // Method to add a new FormControl to the siblings FormArray
  addSibling() {
    this.siblings.push(new FormControl(''));
  }
}