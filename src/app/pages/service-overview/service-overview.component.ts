import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-overview',
  templateUrl: './service-overview.component.html',
  styleUrls: ['./service-overview.component.css']
})
export class ServiceOverviewComponent implements AfterViewInit, OnInit, OnDestroy {

  data: any;
  work: any;

  typeIndex: number = 0;
  currentType: string = '';
  intervalId: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private el: ElementRef) {
    var slug = this.route.snapshot.paramMap.get('title')
    this.data = this.dataService.data.find(d => d.page == slug);
    this.work = this.dataService.work.find(d => d.service_name == slug);
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


ngOnInit() {
  if (this.work?.types?.length > 0) {
    this.currentType = this.work.types[0];
    this.intervalId = setInterval(() => this.rotateType(), 1500); // every 1.5 sec
  }
}

rotateType() {
  this.typeIndex = (this.typeIndex + 1) % this.work.types.length;
  this.currentType = this.work.types[this.typeIndex];
}

ngOnDestroy() {
  if (this.intervalId) clearInterval(this.intervalId);
}

}
