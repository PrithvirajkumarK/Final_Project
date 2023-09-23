import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePosterComponent } from './anime-poster/anime-poster.component';
import { AnimeListComponent } from './anime-list/anime-list.component';

const routes: Routes = [{path:'',component:AnimeListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
