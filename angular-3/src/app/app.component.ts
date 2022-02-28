import { ConstructionService } from 'src/app/service/construction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.constructionService.getAll();

  constructor(
    private constructionService: ConstructionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onDelete(construction: Construction) {
    this.constructionService.delete(construction).subscribe(
      (bill) => this.router.navigate(['/', '']),
      (err) => 'Error',
      () => ''
    );
  }
}
