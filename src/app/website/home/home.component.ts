import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const scripts = [
      '/assets/lib/jquery/jquery.min.js',
      '/assets/lib/jquery/jquery-migrate.min.js',
      '/assets/lib/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/lib/easing/easing.min.js',
      'assets/lib/mobile-nav/mobile-nav.js',
      '/assets/lib/wow/wow.min.js',
      '/assets/lib/waypoints/waypoints.min.js',
      '/assets/lib/counterup/counterup.min.js',
      '/assets/lib/owlcarousel/owl.carousel.min.js',
      '/assets/lib/isotope/isotope.pkgd.min.js',
      // '/assets/lib/lightbox/js/lightbox.min.js',
      'assets/js/main.js'
    ];

    this.loadScriptsInParallel(scripts)
      .then(() => console.log('All scripts loaded successfully.'))
      .catch(() => console.error('Error loading some scripts.'));
  }

  loadScriptsInParallel(scripts: string[]): Promise<void[]> {
    const promises = scripts.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          console.log(`Loaded: ${src}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Error loading script: ${src}`);
          reject();
        };
        document.body.appendChild(script);
      });
    });
    return Promise.all(promises);
  }
}
