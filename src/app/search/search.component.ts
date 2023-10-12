import { Component } from '@angular/core';
import { AnimeService } from '../anime.service';
import { FormBuilder } from '@angular/forms';
import { anime } from '../app.component';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  animeList: Array<anime> = [];
  getanimeList: Subscription | any;
  isLoading: boolean = false;
  searchForm = this.fb.group({
    search: '',
  });
  previousSearches: string[] = [];

  constructor(private animeservice: AnimeService, private fb: FormBuilder) {}

  ngOnInit() {
    this.search?.valueChanges

      .pipe(
        debounceTime(1500),

        distinctUntilChanged(),

        switchMap((name) => this.animeservice.searchBookList(name || ''))
      )

      .subscribe((mvList) => {
        this.animeList = mvList;
        this.animeservice.changeAnimeList(this.animeList);
      });
    // this.loadAnimeData();
  }
  get search() {
    return this.searchForm.get('search');
  }
}
