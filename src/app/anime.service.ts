import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { anime } from './app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  animeList: Array<anime> = [];
  constructor(private http: HttpClient) {}

  private animeList1 = new BehaviorSubject('');
  currentAnimeList = this.animeList1.asObservable();

  changeAnimeList(animeList1: any) {
    this.animeList1.next(animeList1);
  }
  getanimeList() {
    return this.http.get<anime[]>(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime`
    );
  }
  getanimeListById(id: string) {
    return this.http.get<anime>(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime/${id}`
    );
  }
  addAnimeList(anime: anime) {
    return this.http.post(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime`,
      anime
    );
  }

  editAnimeList(anime: anime) {
    const id = anime.id;
    return this.http.put(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime/${id}`,
      anime
    );
  }
  updateMovieList(anime: anime) {
    const id = anime.id;
    return this.http.put(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime/${id}`,
      anime
    );
  }

  deleteMovieById(id: string) {
    return this.http.delete<anime>(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime/${id}`
    );
  }
  searchBookList(value: string) {
    return this.http.get<anime[]>(
      `https://650ea65d54d18aabfe9955f8.mockapi.io/anime?search=${value}`
    );
  }
}
