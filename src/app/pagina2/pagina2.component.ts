import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit, OnDestroy {

  parametroId: string;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.paramsSubscription = this.route.params.pipe(
      map(p => {
        this.parametroId = p.id;
      })
    ).subscribe();

  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
