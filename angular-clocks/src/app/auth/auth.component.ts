import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true; // true para Login, false para Register
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Expresiones regulares para validaciones
  private usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Solo letras, números y guiones bajos, de 3 a 20 caracteres
  private passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Mínimo 8 caracteres, con al menos una mayúscula, una minúscula, un número y un carácter especial

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  // Verificar si hay un usuario logueado
  checkIfUserIsLoggedIn(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      const user = users.find((user: any) => user.username === JSON.parse(currentUser).username);
      if (user) {
        this.router.navigate(['/landingpage']);
      }
    }
  }

  // Cambiar entre modos Login y Register
  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = ''; // Limpiar mensajes de error al cambiar de modo
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (!this.validateUsername() || !this.validatePassword()) {
      return; // Detener el proceso si las validaciones fallan
    }

    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  // Validar el nombre de usuario
  validateUsername(): boolean {
    if (!this.usernameRegex.test(this.username)) {
      this.errorMessage = 'El nombre de usuario debe tener entre 3 y 20 caracteres y solo puede contener letras, números y guiones bajos (_).';
      return false;
    }
    return true;
  }

  // Validar la contraseña
  validatePassword(): boolean {
    if (!this.passwordRegex.test(this.password)) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.';
      return false;
    }
    return true;
  }

  // Método para registrar un nuevo usuario
  register(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: any) => user.username === this.username);

    if (userExists) {
      this.errorMessage = 'El nombre de usuario ya está en uso.';
      return;
    }

    users.push({ username: this.username, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));
    this.errorMessage = 'Registro exitoso. Ahora puedes iniciar sesión.';
    this.isLoginMode = true; // Cambiar a modo Login después del registro
  }

  // Método para iniciar sesión
  login(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.username === this.username && user.password === this.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.errorMessage = 'Inicio de sesión exitoso.';
      this.router.navigate(['/landing']);
    } else {
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
    }
  }
}
