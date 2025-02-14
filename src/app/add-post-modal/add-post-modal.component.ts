import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonContent, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonIcon, IonButton, IonButtons, IonToolbar, IonHeader],
})
export class AddPostModalComponent implements OnInit {

  private readonly modalCtrl: ModalController = inject(ModalController);

  constructor() { 
    addIcons({ closeCircleOutline });
  }

  ngOnInit() {}

  closeModal() {
    // close the modal
    this.modalCtrl.dismiss();
  }

}
