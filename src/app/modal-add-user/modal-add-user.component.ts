import { Component } from '@angular/core';
import *  as bootstrap from 'bootstrap';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrl: './modal-add-user.component.scss'
})
export class ModalAddUserComponent {

  closeModal(){
const modalElement : HTMLElement | null = document.getElementById("myModal");
if (modalElement) {
const modalIntance : Modal| null = bootstrap.Modal.getInstance(modalElement);
modalIntance?.hide();
}
  }

}
