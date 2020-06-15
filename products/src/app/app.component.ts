  
import { Component, OnInit } from '@angular/core';



declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'products';
  
constructor(){

}

ngOnInit(){
  
}



}

// $( document ).ready(function() {
//   window.SpeechRecognition = window.SpeechRecognition;
//   let finalTranscript = '';
//   let recognition = new window.SpeechRecognition();

//   recognition.interimResults = true;
//   recognition.maxAlternatives = 10;
//   recognition.continuous = true;

//   recognition.onresult = (event) => {
//     let interimTranscript = '';
//     for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
//       let transcript = event.results[i][0].transcript;
//       if (event.results[i].isFinal) {
//         finalTranscript += transcript;
//       } else {
//         interimTranscript += transcript;
//       }
//     }

//     document.querySelector('#search').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
//   }
//   recognition.start();

// });
