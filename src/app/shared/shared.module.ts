// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PickupCallCardComponent } from '../components/pickup-call-card/pickup-call-card.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@NgModule({
  declarations: [PickupCallCardComponent, ErrorMessageComponent], // Deklarasikan komponen
  exports: [PickupCallCardComponent, ErrorMessageComponent, FormsModule, IonicModule], // Ekspor komponen agar bisa digunakan di modul lain
  imports: [CommonModule, IonicModule, FormsModule, IonicModule], // Import modul yang dibutuhkan oleh komponen
})
export class SharedModule {}