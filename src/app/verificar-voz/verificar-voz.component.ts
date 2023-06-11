import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-verificar-voz',
  templateUrl: './verificar-voz.component.html',
  styleUrls: ['./verificar-voz.component.css']
})
export class VerificarVozComponent {
   //Lets initiate Record OBJ
   private record:any;
   //Will use this flag for detect recording
   public recording = false;
   //Url of Blob
   public url = '';
   private error = '';
   public listUrl:any = [];
   public showModal = false;
   usuario: Usuario = new Usuario;
   constructor(private domSanitizer: DomSanitizer) {
   }
   ngOnInit(){
    
   }
   add(){
    console.log(this.usuario);
    // this.usuarioService.post(this.usuario).subscribe( p => {
    //   if (p != null) {
    //     const messageBox = this.modalService.open(AlertModalComponent)
    //     messageBox.componentInstance.title = "Resultado Operación";
    //     messageBox.componentInstance.cuerpo = 'Info: Se ha agregado un cliente';
    //     this.usuario = p
    //   }
    // });
   }
   sanitize(url:string){
       return this.domSanitizer.bypassSecurityTrustUrl(url);
   }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
   /**
    * Start recording.
    */
   initiateRecording() {
       
       this.recording = true;
       let mediaConstraints = {
           video: false,
           audio: true
       };
       navigator.mediaDevices
           .getUserMedia(mediaConstraints)
           .then(this.successCallback.bind(this), this.errorCallback.bind(this));
          //  setTimeout(() => {
          //   // Aquí dentro se ejecutará después de 2 segundos
          //     this.stopRecording();
          //     this.recording=false;
          //   // Realiza la acción que deseas después de la pausa
          // }, 2000);
   }
   /**
    * Will be called automatically.
    */
   successCallback(stream:any) {    
       //Start Actuall Recording
       var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
       this.record = new StereoAudioRecorder(stream, {type: 'audio', mimeType: 'audio/wav', numberOfAudioChannels: 1});
       this.record.record();
   }
   /**
    * Stop recording.
    */
   stopRecording() {
       this.recording = false;
       this.record.stop(this.processRecording.bind(this));
   }
   /**
    * processRecording Do what ever you want with blob
    * @param  {any} blob Blog
    */
   processRecording(blob:any) {
       this.url = URL.createObjectURL(blob);
       this.usuario.grabacionesListUrl.push(this.url);
   }
   /**
    * Process Error.
    */
   errorCallback(error:string) {
       this.error = 'Can not play audio in your browser';
   }

   eliminarItem(indice:number){
    this.usuario.grabacionesListUrl.splice(indice, 1)
   }
}
