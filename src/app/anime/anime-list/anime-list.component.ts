import { Component } from '@angular/core';
import { AnimeService } from 'src/app/anime.service';
import { anime } from 'src/app/app.component';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {

  animeList:Array<anime>=[];
 getanimeList:Subscription | any;

constructor(private animeservice:AnimeService){}

ngOnInit(){
// this.LoadData();
this.getanimeList=this.animeservice.getanimeList().
  subscribe((Anime)=>
  {this.animeList=Anime;
  });
}
// LoadData(){
  
// }

ngOnDestroy(){
  this.getanimeList.unsubscribe();
}
}
