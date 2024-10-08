import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {
  ngOnInit(): void {
    const scripts = [
      '/assets/application/modules/jquery.min.js',
      '/assets/application/modules/popper.js',
      '/assets/application/modules/tooltip.js',
      '/assets/application/modules/bootstrap/js/bootstrap.min.js',
      '/assets/application/modules/nicescroll/jquery.nicescroll.min.js',
      '/assets/application/modules/moment.min.js',

      '/assets/application/js/stisla.js',
      '/assets/application/modules/jquery.sparkline.min.js',
      '/assets/application/modules/chart.min.js',
      '/assets/application/modules/owlcarousel2/dist/owl.carousel.min.js',
      '/assets/application/modules/summernote/summernote-bs4.js',
      '/assets/application/modules/chocolat/dist/js/jquery.chocolat.min.js',
      '/assets/js/page/index.js',
      
      '/assets/application/js/scripts.js',
      '/assets/application/js/custom.js'
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
