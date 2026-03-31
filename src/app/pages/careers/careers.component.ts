import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

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
}
