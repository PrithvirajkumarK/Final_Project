import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent {
  id: string = '';
  anime: any;
  constructor(
    private router: ActivatedRoute,
    private animeservice: AnimeService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
  }

  ngOnInit(){
    this.animeservice.getAnimeById(this.id).subscribe((mv) => {
      console.log(mv);
      this.anime = {
        ...mv,
      };
    });
  }
  
}
