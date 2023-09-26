import { Component } from '@angular/core';
type anime={
  id:string
  title:string
  poster:string
  summary:string
  trailer:string
  languages:Array<string>
  genres:Array<string>
  like:number
  dislike:number
  censorRating:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final_Project';
}

export{anime}
