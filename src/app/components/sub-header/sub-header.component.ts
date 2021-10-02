import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  submit(valor: string) {
    this.router.navigateByUrl(`/search/${valor}`);
  }

  getNovedades() {
    this.router.navigate(['/'], { fragment: 'novedades' });
  }

  getBestSellers() {
    this.router.navigate(['/'], { fragment: 'BestSellers' });
  }

  getNovelas() {
    this.router.navigate(['/'], { fragment: 'novelas' });
  }

  getEducativos() {
    this.router.navigate(['/'], { fragment: 'educativos' });
  }

}
