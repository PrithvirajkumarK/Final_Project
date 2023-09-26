import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/anime.service';
import { anime } from 'src/app/app.component';
import { GENRES, LANGUAGES } from './global';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})
export class AddAnimeComponent {

  languages = LANGUAGES;

    genres = GENRES;
  animeForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    languages:[[" "]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    genres:[[]],
    censorRating:[],
    Releaseyear:[]
  });
  
  animeList;
  constructor(private animeservice: AnimeService,private fb:FormBuilder,private router:Router){
    this.animeList= animeservice.animeList;
  }
  
  get title() {
    return this.animeForm?.get('name');
  }
  get poster() {
    return this.animeForm?.get('poster');
  }
  get rating() {
    return this.animeForm?.get('rating');
  }
  get summary() {
    return this.animeForm?.get('summary');
  }
  get trailer() {
    return this.animeForm?.get('trailer');
  }
  
  
  addanime(){
    const newmovie= this.animeForm.value
    if(this.animeForm.valid){
      this.animeservice.addAnimeList(newmovie as unknown as anime ).subscribe(() =>{ 
        this.router.navigate(["/anime/"])})
  
      
      console.log(newmovie);
    }
  }
}
