import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  @ViewChild('heroVideo') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const vid = this.video.nativeElement;

    const playVideo = () => {
      vid.play().then(() => {
        // console.log('playing');
      }).catch(() => {
        // Retry if blocked
        setTimeout(playVideo, 300);
      });
    };
  
    // Force load (important on refresh)
    vid.load();
  
    // Best event (waits for enough buffer)
    vid.oncanplaythrough = playVideo;
  
    // Backup triggers
    vid.onloadeddata = playVideo;
  
    // Final fallback
    setTimeout(playVideo, 1000);

    

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
