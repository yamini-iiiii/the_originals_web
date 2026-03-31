import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements AfterViewInit, OnInit, OnDestroy {
  data: any;
  work: any;

  typeIndex: number = 0;
  currentType: string = '';
  intervalId: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private el: ElementRef) {
    var slug = this.route.snapshot.paramMap.get('type')
    for (const section of this.dataService.data) {
      const match = section.service_types.find(st => st.page === slug);
      if (match) {
        this.data = match;
        break;
      }
    }

    var slug2 = this.route.snapshot.paramMap.get('title')
    this.work = this.dataService.work.find(d => d.service_name == slug2);
  }

  
  ngAfterViewInit(): void {
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
