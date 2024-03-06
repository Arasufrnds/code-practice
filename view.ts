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










//Template Driven form:
<form (ngSubmit)="onSubmit(form)" #form="ngForm">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" [(ngModel)]="user.name" name="name" required>
    <div *ngIf="name.invalid && name.touched" class="error">   
      Name is required.
    </div>
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" [(ngModel)]="user.email" name="email" required>
    <div *ngIf="email.invalid && email.touched" class="error">
      Email is required.
    </div>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" [(ngModel)]="user.password" name="password" required minlength="6">
    <div *ngIf="password.invalid && password.touched" class="error">
      Password is required and must be at least 6 characters.
    </div>
  </div>
  <button type="submit" [disabled]="form.invalid">Register</button>
</form>



//TS:
export class AppComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
  }
}


//css:
input.ng-invalid.ng-touched {
  border-color: red;
}

.error {
  color: red;
  font-size: 0.8rem;
}


//local storage of set and get token:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly tokenKey: string = 'authToken';

  constructor() { }

  // Save the token
  saveToken(token: string, useSessionStorage: boolean = false): void {
    if (useSessionStorage) {
      sessionStorage.setItem(this.tokenKey, token);
    } else {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  // Retrieve the token
  getToken(useSessionStorage: boolean = false): string | null {
    if (useSessionStorage) {
      return sessionStorage.getItem(this.tokenKey);
    } else {
      return localStorage.getItem(this.tokenKey);
    }
  }

  // Remove the token
  removeToken(useSessionStorage: boolean = false): void {
    if (useSessionStorage) {
      sessionStorage.removeItem(this.tokenKey);
    } else {
      localStorage.removeItem(this.tokenKey);
    }
  }

  // Check if the token exists
  isLoggedIn(useSessionStorage: boolean = false): boolean {
    return this.getToken(useSessionStorage) !== null;
  }
}


//Ts file:
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(): void {
    // Simulate a login and receive a token
    const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

    // Save the token in local storage
    this.authService.saveToken(fakeToken);

    // Or, to save the token in session storage, pass true as the second argument
    // this.authService.saveToken(fakeToken, true);
  }
}

logout(): void {
  // Remove the token from local storage
  this.authService.removeToken();

  // Or, to remove the token from session storage, pass true as the argument
  // this.authService.removeToken(true);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Refreshing the timeout token using http:
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, catchError, filter, take, switchMap } from 'rxjs';
import { AuthService } from './auth.service'; // Import your AuthService

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService implements HttpInterceptor {

  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add your auth token to outgoing requests
    const authToken = this.authService.getAuthToken();
    req = this.addToken(req, authToken);

    return next.handle(req).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        // Handle 401 errors
        return this.handle401Error(req, next);
      } else {
        // Forward other errors
        return throwError(() => error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.refreshTokenInProgress = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this.addToken(request, token));
        }),
        catchError((err) => {
          this.refreshTokenInProgress = false;
          this.authService.logout(); // or handle error accordingly
          return throwError(() => err);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }
}


///pasing 401 erroe:
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // You might be adding your token here to outgoing requests
    // ...

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // Handle 401 errors (unauthorized) globally
          // For example, redirect to a login page
          // or show a modal asking the user to login again
          console.error('Unauthorized request:', req.url);
          // Assuming you have a method to log the user out
          // this.authService.logout();
          // Redirecting to the login page
          this.router.navigate(['/login']);
        }
        
        // Forward the error to be handled locally if needed
        return throwError(() => error);
      })
    );
  }
}