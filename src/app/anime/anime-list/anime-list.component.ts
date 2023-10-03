import { Component } from '@angular/core';
import { AnimeService } from 'src/app/anime.service';
import { anime } from 'src/app/app.component';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent {
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
      });
    this.loadAnimeData();
  }
  get search() {
    return this.searchForm.get('search');
  }

  loadAnimeData() {
    this.isLoading = true;
    this.getanimeList = this.animeservice.getanimeList().subscribe((Anime) => {
      this.animeList = Anime;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.getanimeList.unsubscribe();
  }

  show = true;
  searchIcon() {
    this.show;
  }

  clearSearch() {
    const searchValue = this.searchForm.get('search')?.value;

    if (searchValue) {
      this.previousSearches.push(searchValue);
    }

    this.searchForm.get('search')?.setValue('');
  }
  clear() {
    this.search?.reset();
  }
}
