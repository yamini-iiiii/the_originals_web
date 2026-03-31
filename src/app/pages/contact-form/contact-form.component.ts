import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  fullName: string='';
  email: string='';
  mobile: string='';
  contactReason: string='';
  message: string='';
  commConsent: boolean=false;
  checkTwo: boolean=false;

  fullNameErr: string='';
  emailErr: string='';
  mobileErr: string='';
  contactReasonErr:string='';
  checkTwoErr: string='';

  constructor(private service: ApiService) {}

  submit(form: NgForm){
    let num=0;
    if(!this.fullName){
      this.fullNameErr='required';
      num += 1;
    }
    if(!this.email){
      this.emailErr='required';
      num += 1;
    }  
    if (this.email && this.validateEmailAddress() == 0) {
      this.emailErr='invalid';
      num += 1;
    }
    if(!this.mobile){
      this.mobileErr='required';
      num += 1;
    } 
    if(this.mobile && (this.mobile.length<10 || this.isMobileWrong() == 0)){
      this.mobileErr='invalid';
      num += 1;
    }
    if(!this.contactReason){
      this.contactReasonErr='required';
      num += 1;
    }  
    if(!this.checkTwo){
      this.checkTwoErr='required';
      num += 1;
    }  

    if(num==0){
      console.log("Successfully submitted: ", this.fullName, this.email, this.mobile, this.contactReason, this.message, this.checkTwo);
      document.getElementById('contact-form')!.style.display = 'none';
      document.getElementById('contact-thankyou')!.style.display = 'block';

      var obj = {
        "name": this.fullName,
        "email": this.email,
        "mobile": this.mobile,
        "contact_reason": this.contactReason,
        "message": this.message,
        "communication_consent": this.commConsent ? 1 : 0
      }
      this.service.createLead(obj).subscribe((data:any)=>{})

      form.resetForm();  
    }
    
  }


  validateEmailAddress() {
    var lastChars = this.email.lastIndexOf(".");
    var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (!expression.test(String(this.email).toLowerCase()) || this.email.substr(lastChars, 3).length < 3) {
        return 0;
    }
    else {
        return 1;
    }
  }

  isMobileWrong() {
    let firstDigit = this.mobile.substr(0, 1);
    if (
      firstDigit != '6' &&
      firstDigit != '7' &&
      firstDigit != '8' &&
      firstDigit != '9'
    ) {
      return 0;
    } else if (this.mobile.match(/^(\d)\1+$/g)) {
      return 0;
    } else {
      return 1;
    }
  }

  numbersOnly($event: any) {
    if ($event.target.value.length === 0) {
      if ($event.key === '0' || $event.key === '1' || $event.key === '2' || $event.key === '3' || $event.key === '4' || $event.key === '5') {
        return false;
      }
    }
    var reg = /^[0-9]+$/;
    return (reg.test($event.key));
  };

  removeErrorMsg(field:string){
    if(field=='fullName'){
      this.fullNameErr='';
    }
    if(field=='email'){
      this.emailErr='';
    }
    if(field=='mobile'){
      this.mobileErr='';
    }
    if(field=='contactReason'){
      this.contactReasonErr='';
    }
    if(field=='checkTwo'){
      this.checkTwoErr='';
    }
  }
  

}
