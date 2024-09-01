import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', [Validators.required, Validators.email]],
      contrasenna: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  async registrar() {
    if (this.registroForm.valid) {
      const { nombre, usuario, contrasenna } = this.registroForm.value;
      console.log('Nombre:', nombre);
      console.log('Usuario:', usuario);
      console.log('Contraseña:', contrasenna);


      this.router.navigate(['/login']);
      await this.showToast('Registro exitoso. Por favor, inicia sesión.');
    } else {
      await this.showAlert('Por favor, complete todos los campos requeridos.');
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
