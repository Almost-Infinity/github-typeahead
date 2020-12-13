import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  private githubURL = 'https://api.github.com/search/users?q=';
  
  public keyUp = new Subject<Event>();
  public users: Array<Object> = [];
  public shownSpinner = false;

  constructor() {
    this.subscription = this.keyUp.pipe(
      map((evt) => (<HTMLInputElement>evt.target)?.value),
      filter((search) => /^[a-zA-Z0-9][a-zA-Z0-9-]{1,39}$/.test(search)),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.users = [];
        this.shownSpinner = true;
      }),
      switchMap((search) => ajax.getJSON(this.githubURL + search)),
      tap(() => this.shownSpinner = false),
      map((result: any) => result.items),
      mergeMap((users) => users)
    ).subscribe((user) => this.users.push(<Object>user));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
