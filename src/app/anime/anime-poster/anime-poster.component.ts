import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/anime.service';
import { anime } from 'src/app/app.component';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-anime-poster',
  templateUrl: './anime-poster.component.html',
  styleUrls: ['./anime-poster.component.css']
})
export class AnimePosterComponent {

@Input() anime: any

@Output() removeMovie = new EventEmitter();
count=0
increment(){
  console.log("Increment")
 this.count++
}
dcount=this.count
decrement(){
  this.dcount++
}

show=true
lesssummary(){
  this.show= !this.show;}

  value:boolean = true;
  LikeSubject = new Subject<number>();
  DislikeSubject = new Subject<number>();
constructor(private router:Router,private animeservice:AnimeService){
  this.LikeSubject.pipe(debounceTime(2000),
  switchMap(
    (count) => 
    {this.anime= {...this.anime,like:count};
    return this.anime.editAnime(this.anime);
  })).subscribe();
  this.DislikeSubject.pipe(debounceTime(2000),
  switchMap(
    (count) => 
    {this.anime = {...this.anime,dislike:count};
    return this.anime.editAnime(this.anime);
  })).subscribe();
}
getdetails(){
  this.router.navigate(['/anime',this.anime.id])
}
editmovie(){
  this.router.navigate(['/anime/edit', this.anime.id])
}

deleteMovie() {
  this.animeservice.deleteMovieById(this.anime.id).subscribe(() => {
    console.log('Movie deleted successfully');
    this.removeMovie.emit();
  });
  
}

updateLikecount(count:number){
  this.LikeSubject.next(count);
}

updatedisLikecount(count:number){
  this.DislikeSubject.next(count);
}
}


