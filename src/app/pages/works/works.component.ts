import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  trigger, transition, style, animate
} from '@angular/animations';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})

export class WorksComponent implements OnInit, OnDestroy {

  services: any[] = [];
  selected_service: string="all";
  data: any;

  typeIndex: number = 0;
  currentType: string = '';
  intervalId: any;

  currentTypes: { [key: string]: string } = {};
  typeIndices: { [key: string]: number } = {};


  constructor(private dataService: DataService){
    this.services = this.dataService.services;
    this.selectService();
  }

  selectService() {
    if (this.selected_service === 'all') {
      this.data = this.dataService.work;
  
      // Reset type indices and current types
      this.typeIndices = {};
      this.currentTypes = {};
      this.data.forEach((service:any) => {
        if (service.types?.length > 0) {
          this.typeIndices[service.service_name] = 0;
          this.currentTypes[service.service_name] = service.types[0];
        }
      });
  
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.rotateAllTypes(), 1500);
    } else {
      this.data = this.dataService.work.find(d => d.service_name == this.selected_service);
  
      if (this.intervalId) clearInterval(this.intervalId);
  
      if (this.data?.types?.length > 0) {
        this.typeIndex = 0;
        this.currentType = this.data.types[0];
        this.intervalId = setInterval(() => this.rotateType(), 1500);
      }
    }
  }
  

  ngOnInit() {
    if (this.data?.types?.length > 0) {
      this.currentType = this.data.types[0];
      this.intervalId = setInterval(() => this.rotateType(), 1500); // every 1.5 sec
    }
  }
  
  rotateType() {
    this.typeIndex = (this.typeIndex + 1) % this.data.types.length;
    this.currentType = this.data.types[this.typeIndex];
    console.log(this.currentType)
  }

  rotateAllTypes() {
    this.data.forEach((service: any) => {
      const types = service.types;
      if (types?.length > 0) {
        const currentIndex = this.typeIndices[service.service_name] ?? 0;
        const nextIndex = (currentIndex + 1) % types.length;
  
        this.typeIndices[service.service_name] = nextIndex;
        this.currentTypes[service.service_name] = types[nextIndex];
      }
    });
  }
  
  
  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
