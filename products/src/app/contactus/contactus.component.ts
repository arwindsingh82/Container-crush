import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  form = new FormGroup({  
    fname : new FormControl('', Validators.required), 
    lname : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email])
   
  })

  constructor() { }

  ngOnInit() {
  }
  conSubmit(){
    alert("Your query is submited successfully!");
  }
  onSubmit() {  
    if (this.form.valid) {
      console.warn(this.form.value);
      console.log("Form Submitted!");
      this.form.reset();   
    } 
  }

}
