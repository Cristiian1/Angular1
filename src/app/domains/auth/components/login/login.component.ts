import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('signInButton') signInButton!: ElementRef;
  @ViewChild('signUpButton') signUpButton!: ElementRef;
  @ViewChild('registerForm') registerForm!: ElementRef;
  @ViewChild('loginForm') loginForm!: ElementRef;

  ngAfterViewInit() {
    // Verificamos si todos los ViewChild están definidos
    if (this.signInButton && this.signUpButton && this.registerForm && this.loginForm) {
      // Agregamos el evento al botón de iniciar sesión
      this.signInButton.nativeElement.addEventListener('click', () => {
        this.registerForm.nativeElement.classList.add('hide');
        this.loginForm.nativeElement.classList.remove('hide');
      });

      // Agregamos el evento al botón de registrarse
      this.signUpButton.nativeElement.addEventListener('click', () => {
        this.loginForm.nativeElement.classList.add('hide');
        this.registerForm.nativeElement.classList.remove('hide');
      });
    }
  }
}
