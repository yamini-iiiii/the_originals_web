import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Job {
  title: string;
  location: string;
  type: 'Full‑time' | 'Part‑time' | 'Contract';
  description?: string;
}

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.css'],
})
export class JobOpeningsComponent {
  /** Replace with a service call when you wire up your back‑end */
  jobs: Job[] = [
    {
      title: 'Senior Angular Developer',
      location: 'Remote',
      type: 'Full‑time',
      description: 'Build enterprise-grade apps'
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Contract',
      description: 'Design modern, accessible interfaces'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full‑time',
      description: 'Maintain CI/CD pipelines'
    },
  ];

  selectedJob: Job | null = null;
  showApplicationForm = false;
  applyJob: Job | null = null;

  fullName: string='';
  email: string='';
  mobile: string='';
  resumeFile: File | null = null;
  linkedInUrl: string=''
  message: string='';

  fullNameErr: string='';
  emailErr: string='';
  mobileErr: string='';
  resumeErr  = '';

  thankYou = false;

  openJob(job: any) {
    this.selectedJob = job;
    this.showApplicationForm = false;
  }

  openApplicationForm() {
    this.applyJob = this.selectedJob
    this.closePopup1();
    this.showApplicationForm = true;
  }

  closePopup1() {
    this.selectedJob = null;
  }

  closePopup2() {
    this.selectedJob = null;
    this.applyJob = null;
    this.showApplicationForm = false;

    this.fullName='';
    this.email='';
    this.mobile='';
    this.resumeFile = null;

    this.fullNameErr='';
    this.emailErr='';
    this.mobileErr='';
    this.resumeErr=''
  }

  handleResume(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.resumeFile = null;
      return;
    }
    this.resumeFile = input.files[0];
    this.resumeErr  = '';  // clear any old error instantly (optional)
  }

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

      /* 𝗥𝗲𝘀𝘂𝗺𝗲 𝗩𝗮𝗹𝗶𝗱𝗮𝘁𝗶𝗼𝗻 */
      if (!this.resumeFile) {
        this.resumeErr = 'required';
        num += 1;
      } else {
        // type check
        const allowed = ['pdf', 'doc', 'docx'];
        const ext = this.resumeFile.name.split('.').pop()?.toLowerCase() || '';
        if (!allowed.includes(ext)) {
          this.resumeErr = 'type';
          num += 1;
        }
        // size check (bytes) 5 MB = 5 * 1024 * 1024
        else if (this.resumeFile.size > 5 * 1024 * 1024) {
          this.resumeErr = 'size';
          num += 1;
        }
      }

      if(num==0){
        this.thankYou = true;

        var obj = {
          name: this.fullName,
          email: this.email,
          mobile: this.mobile,
          message: this.message,
          linkedin_url: this.linkedInUrl,
          job_title: this.applyJob?.title,
          job_type: this.applyJob?.type,
          job_location: this.applyJob?.location
        }
        console.log('job',obj)

        setTimeout(() => {
          this.thankYou = false;
          this.closePopup2();
        }, 3000);
      
        form.resetForm();
        this.resumeFile = null;
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
    if(field=='resume'){
      this.resumeErr='';
    }
  }
}
