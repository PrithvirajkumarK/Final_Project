import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/anime.service';
import { anime } from 'src/app/app.component';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent {
  id: string = '';
  anime:any
  constructor(
    private router: ActivatedRoute,
    private animeservice: AnimeService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
  }

    ngOnInit(){
      this.animeservice.getanimeListById(this.id).subscribe((mv:any) => {
        console.log(mv);
        this.anime = {...mv,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(mv.trailer),
      };
      });
    }
  
}
