import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit  {
  services: any[] =[];
  data: any[] = [];

  constructor(private dataService: DataService, private el: ElementRef) {
    this.data = this.dataService.data;
    this.services = this.dataService.services;
  }


  ngAfterViewInit(): void {
    // reveal
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = this.el.nativeElement.querySelectorAll('.reveal');
    elements.forEach((el: Element) => observer.observe(el));

    // scroll
    document.querySelectorAll('.service-tabs a').forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Optional scroll offset (e.g., for sticky header)
            const yOffset = -80;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      });
    });    
  }
}
