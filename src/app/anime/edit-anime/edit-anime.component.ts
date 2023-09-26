import { Component } from '@angular/core';
import { anime } from 'src/app/app.component';
import { GENRES, LANGUAGES } from '../add-anime/global';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimeService } from 'src/app/anime.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent {
  id: string = '';
  

  languages = LANGUAGES;

  genres = GENRES;
animeForm = this.fb.group({
  id:'',
  title: ['', [Validators.required, Validators.minLength(5)]],
  rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
  languages:[['']],
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
  genres:[[""]],
  censorRating:[""],
  
});

constructor(private animeservice: AnimeService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){
  const { id } = this.route.snapshot.params;
  this.id = id;
}
ngOnInit() {
  this.animeservice
        .getanimeListById(this.id)
        .subscribe((mvList) => {
          this.animeForm.patchValue(mvList);
        });
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


editanime(){
  const newmovie= this.animeForm.value
  if(this.animeForm.valid){
    this.animeservice.editAnimeList(newmovie as anime).subscribe(() =>{ 
      this.router.navigate(["/anime/"])})

    
    console.log(newmovie);
  }
}
}


