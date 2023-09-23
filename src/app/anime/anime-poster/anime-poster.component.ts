import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { anime } from 'src/app/app.component';

@Component({
  selector: 'app-anime-poster',
  templateUrl: './anime-poster.component.html',
  styleUrls: ['./anime-poster.component.css']
})
export class AnimePosterComponent {

@Input() Anime: any
}


